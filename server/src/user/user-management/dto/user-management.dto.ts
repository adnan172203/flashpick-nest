import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { Role } from '../enums/role.enum';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  address: string;

  @IsEnum(Role)
  role: Role;

  @IsString()
  phoneNumber: string;
}
