import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';

import { Role } from '../../../user-management/enums/role.enum';

export class SignupDto {
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

export class SigninDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
