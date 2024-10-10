// import { HttpException, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User, UserRole } from '../../entities/user.entity';
// import * as bcrypt from 'bcryptjs';
// import * as jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv';
// dotenv.config();

// interface SignupParams {
//   name: string;
//   email: string;
//   password: string;
//   address: string;
//   role: string;
//   phoneNumber: string;
// }

// interface SigninParams {
//   email: string;
//   password: string;
// }

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectRepository(User) private readonly userRepository: Repository<User>
//   ) {}

//   async signUp({
//     name,
//     email,
//     password,
//     address,
//     role,
//     phoneNumber,
//   }: SignupParams): Promise<string> {
//     const userExists = await this.userRepository.findOne({ where: { email } });

//     if (userExists) {
//       throw new HttpException('Username or email already exists', 409);
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = this.userRepository.create({
//       name,
//       email,
//       password: hashedPassword,
//       address,
//       role: role as UserRole,
//       phoneNumber,
//     });

//     const savedUser = await this.userRepository.save(user);

//     return this.generateJWT(name, savedUser.id);
//   }

//   async signIn({ email, password }: SigninParams) {
//     const user = await this.userRepository.findOne({
//       where: {
//         email,
//       },
//     });
//     if (!user) {
//       throw new HttpException('Invalid credentials', 400);
//     }

//     const hashedPassword = user.password;

//     const isValidPassword = await bcrypt.compare(password, hashedPassword);

//     if (!isValidPassword) {
//       throw new HttpException('Invalid credentials', 400);
//     }

//     return this.generateJWT(user.name, user.id);
//   }

//   private generateJWT(name: string, id: string) {
//     return jwt.sign(
//       {
//         name,
//         id,
//       },
//       process.env.JSON_SECRET,
//       {
//         expiresIn: 3600000,
//       }
//     );
//   }
// }

import {
  HttpException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from './entities/auth.entity';
import { User } from '../../entities/user.entity';
import { Role } from '../../user-management/enums/role.enum';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';

import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { RefreshTokenIdsStorage } from './refresh-token-storage/refresh-token-ids.storage';
import { InvalidateRefreshTokenError } from './errors/invalidate-refresh-token.error';
import { RefreshTokenDto } from './dto/refresh-token.dto';
dotenv.config();

interface SignupParams {
  name: string;
  email: string;
  password: string;
  address: string;
  role: string;
  phoneNumber: string;
}

interface SigninParams {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenIdsStorage: RefreshTokenIdsStorage
  ) {}

  async signUp({
    name,
    email,
    password,
    address,
    role,
    phoneNumber,
  }: SignupParams): Promise<{ accessToken: string; refreshToken: string }> {
    const userExists = await this.userRepository.findOne({ where: { email } });

    if (userExists) {
      throw new HttpException('Username or email already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      address,
      role: role as Role,
      phoneNumber,
    });

    const savedUser = await this.userRepository.save(user);

    // return this.generateJWT(name, savedUser.id);
    return await this.generateTokens(savedUser);
  }
  async signIn({ email, password }: SigninParams) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new HttpException('Invalid credentials', 400);
    }

    const hashedPassword = user.password;

    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) {
      throw new HttpException('Invalid credentials', 400);
    }

    // return this.generateJWT(user.name, user.id);
    if (user && user.role) {
      return await this.generateTokens(user);
    } else {
      throw new Error('User role is not defined');
    }
  }

  async generateTokens(user: User) {
    const refreshTokenId = randomUUID();
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        { email: user.email, role: user.role }
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl, {
        refreshTokenId,
      }),
    ]);
    await this.refreshTokenIdsStorage.insert(user.id, refreshTokenId);
    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    try {
      const { sub, refreshTokenId } = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, 'sub'> & { refreshTokenId: string }
      >(refreshTokenDto.refreshToken, {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
      });
      const user = await this.userRepository.findOneOrFail({
        where: { id: sub },
      });
      const isValid = await this.refreshTokenIdsStorage.validate(
        user.id,
        refreshTokenId
      );
      if (isValid) {
        await this.refreshTokenIdsStorage.invalidate(user.id);
      } else {
        throw new Error('Refresh Token is invalid');
      }
      return this.generateTokens(user);
    } catch (err) {
      if (err instanceof InvalidateRefreshTokenError) {
        throw new UnauthorizedException('Access denied');
      }
      throw new UnauthorizedException();
    }
  }

  private async signToken<T>(userId: string, expiresIn: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn,
      }
    );
  }
}
