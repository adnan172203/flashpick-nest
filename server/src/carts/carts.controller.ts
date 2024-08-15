import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post('create/:userId')
  addItemToCart(
    @Param('userId') userId: string,
    @Body() createCartDto: CreateCartDto
  ) {
    return this.cartsService.addItemToCart(userId, createCartDto);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':userId')
  getCart(@Param('userId') userId: string) {
    return this.cartsService.getOrCreateCart(userId);
  }

  @Delete(':userId/items/:cartItemId')
  removeItem(
    @Param('userId') userId: string,
    @Param('cartItemId') cartItemId: string
  ) {
    return this.cartsService.removeItemFromCart(userId, cartItemId);
  }
}
