import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemsRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>
  ) {}

  async createOrder(createOrderDto: any) {
    const { orderItems } = createOrderDto;

    const order = this.ordersRepository.create({
      ...createOrderDto,
      // orderItems: itemsWithPrice,
    });
    const savedOrder = await this.ordersRepository.save(order);

    await this.createOrderItemWithPrice(orderItems, savedOrder);

    return 'Order Created Successfully';
  }

  private async createOrderItemWithPrice(orderItemsDto: any[], order: any) {
    const orderItems = [];

    for (const orderItemDto of orderItemsDto) {
      const { productId } = orderItemDto;

      const product = await this.productsRepository.findOneByOrFail({
        id: productId,
      });

      const orderItem = this.orderItemsRepository.create({
        ...orderItemDto,
        orderId: order, // Use the order entity here
        productName: product.name, // Assuming 'name' is the field for product name
        productPrice: product.price,
      });

      const savedOrderItem = await this.orderItemsRepository.save(orderItem);
      // orderItems.push(savedOrderItem);
    }

    // return orderItems;
  }
}
