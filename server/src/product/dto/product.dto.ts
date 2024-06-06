import { IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  price: number;

  @IsInt()
  quantity: number;

  @IsString()
  sku: string;

  @IsString()
  color: string;

  @IsString()
  size: string;

  @IsInt()
  stock: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  fullDescription: string;

  @IsString()
  additionalText: string;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsInt()
  price: number;

  @IsOptional()
  @IsInt()
  quantity: number;

  @IsOptional()
  @IsString()
  sku: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  size: string;

  @IsOptional()
  @IsInt()
  stock: string;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsString()
  fullDescription: string;

  @IsOptional()
  @IsString()
  additionalText: string;
}
