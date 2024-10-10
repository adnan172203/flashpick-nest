import { Module } from '@nestjs/common';
import { AuthService } from './iam/authentication/auth.service';
import { AuthController } from './iam/authentication/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserManagementService } from './user-management/user-management.service';
import { UserManagementController } from './user-management/user-management.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './iam/config/jwt.config';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './iam/authentication/guards/authentication.guard';
import { AccessTokenGuard } from './iam/authentication/guards/access-token.guard';
import { RefreshTokenIdsStorage } from './iam/authentication/refresh-token-storage/refresh-token-ids.storage';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    AuthService,
    UserManagementService,
    RefreshTokenIdsStorage,
    AccessTokenGuard,
  ],
  controllers: [AuthController, UserManagementController],
})
export class UserModule {}
