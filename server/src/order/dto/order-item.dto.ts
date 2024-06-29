import { IsUUID, IsString } from 'class-validator';

export class OrderItemDTO {
  @IsUUID()
  id: string;

  @IsUUID()
  orderId: string;

  @IsUUID()
  productId: string;

  @IsString()
  productName: string;

  @IsString()
  productImage: string;

  @IsString()
  productPrice: string;

  @IsString()
  quantity: string;
}
