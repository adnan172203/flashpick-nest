import { IsString, IsPhoneNumber, IsEmail } from 'class-validator';

export class ShippingAddressDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  zipCode: string;

  @IsPhoneNumber()
  phone: string;

  @IsEmail()
  email: string;
}
