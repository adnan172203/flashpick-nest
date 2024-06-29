import { IsUUID, IsString, IsDate, IsArray } from 'class-validator';
import { OrderItemDTO } from './order-item.dto'; // Assume there's a corresponding DTO for OrderItem

export class CreateOrderDto {
  @IsUUID()
  id: string;

  @IsUUID()
  userId: string;

  @IsString()
  name: string;

  @IsString()
  totalCost: string;

  @IsString()
  orderStatus: string;

  @IsString()
  paymentMethod: string;

  @IsArray()
  orderItems: OrderItemDTO[];
}
