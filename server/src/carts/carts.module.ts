import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { CartItemsModule } from './cart-items/cart-items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './cart-items/entities/cart-item.entity';
import { Cart } from './entities/cart.entity';

@Module({
  imports: [CartItemsModule, TypeOrmModule.forFeature([Cart, CartItem])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
