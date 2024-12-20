import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly ordersService: OrderService) {}

  @Post('')
  create(@Body() createOrderDto) {
    console.log('createOrderDto========>>>>>.', createOrderDto);

    return this.ordersService.createOrder(createOrderDto);
  }

  @Get('')
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get('/:id')
  getOrder(@Param('id') id: string) {
    return this.ordersService.getOrder(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.ordersService.deleteOrder(id);
  }
}
