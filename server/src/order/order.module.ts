import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from 'src/product/entities/product.entity';
import { ShippingAddress } from './entities/shipping-address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem, Product, ShippingAddress]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
