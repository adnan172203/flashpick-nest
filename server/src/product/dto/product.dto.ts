import { Type } from 'class-transformer';
import {
  IsString,
  IsInt,
  IsBoolean,
  IsOptional,
  IsArray,
} from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsInt()
  price: number;

  @IsInt()
  quantity: number;

  @IsString()
  sku: string;

  @IsArray()
  @IsString({ each: true })
  color: string[];

  @IsString()
  size: string;

  @IsString()
  fullDescription: string;

  @IsString()
  shortDescription: string;

  @IsString()
  additionalText: string;

  @IsOptional()
  @Type(() => ProductImageDto)
  images?: ProductImageDto[];

  @IsOptional()
  @Type(() => TagsDto)
  tags?: TagsDto[];
}

export class TagsDto {
  @IsString()
  id: string;
}

export class ProductImageDto {
  @IsString()
  productId: string;

  @IsString()
  imageUrl: string;
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
  // @IsString()
  color: string[];

  @IsOptional()
  @IsString()
  size: string;

  @IsOptional()
  @IsString()
  fullDescription: string;

  @IsOptional()
  @IsString()
  additionalText: string;

  @IsOptional()
  @Type(() => ProductImageDto)
  images?: ProductImageDto[];

  @IsOptional()
  @Type(() => TagsDto)
  tags?: TagsDto[];
}
