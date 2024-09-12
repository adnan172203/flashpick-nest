import { IsUUID, IsString, IsDate, IsArray } from 'class-validator';
import { OrderItemDTO } from './order-item.dto';
import { ShippingAddressDto } from './shipping-address-dto';

export class CreateOrderDto {
  @IsUUID()
  id: string;

  @IsUUID()
  userId: string;

  @IsString()
  name: string;

  @IsString()
  totalPrice: string;

  @IsString()
  orderStatus: string;

  @IsString()
  paymentMethod: string;

  @IsArray()
  orderItems: OrderItemDTO[];

  shippingAddress: ShippingAddressDto;
}
