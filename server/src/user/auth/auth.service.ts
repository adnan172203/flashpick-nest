import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User } from '../entities/user.entity';
import * as dotenv from 'dotenv';
dotenv.config();

interface SignupParams {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async signUp({ name, email, password }: SignupParams): Promise<string> {
    const userExists = await this.userRepository.findOne({ where: { email } });

    if (userExists) {
      throw new HttpException('Username or email already exists', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await this.userRepository.save(user);

    return this.generateJWT(name, savedUser.id);
  }

  private generateJWT(name: string, id: string) {
    return jwt.sign(
      {
        name,
        id,
      },
      process.env.JSON_TOKEN_KEY,
      {
        expiresIn: 3600000,
      }
    );
  }
}
