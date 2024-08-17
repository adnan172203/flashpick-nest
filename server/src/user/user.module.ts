import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserManagementService } from './user-management/user-management.service';
import { UserManagementController } from './user-management/user-management.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, UserManagementService],
  controllers: [AuthController, UserManagementController],
})
export class UserModule {}
