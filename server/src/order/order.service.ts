import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../product/entities/product.entity';
import { OrderItemDTO } from './dto/order-item.dto';

interface CreateOrderParams {
  id?: string;
  userId: string;
  name: string;
  totalCost: string;
  orderStatus: string;
  paymentMethod: string;
  orderItems: OrderItemDTO[];
}

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

  async createOrder({
    id,
    userId,
    name,
    totalCost,
    orderStatus,
    paymentMethod,
    orderItems,
  }: CreateOrderParams) {
    const order = this.ordersRepository.create({
      id,
      userId,
      name,
      totalCost,
      orderStatus,
      paymentMethod,
    });
    const savedOrder = await this.ordersRepository.save(order);

    const savedOrderItems = await this.createOrderItemWithPrice(
      orderItems,
      savedOrder
    );

    savedOrder.orderItems = savedOrderItems;

    return order;
  }

  async getAllOrders() {
    return this.ordersRepository.find({
      relations: ['orderItems'],
    });
  }

  async getOrder(id: string) {
    const order = await this.ordersRepository.findOne({
      where: { id },
      relations: ['orderItems'],
    });

    if (!order) {
      throw new NotFoundException('order not found');
    }

    return order;
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
        orderId: order.id, // Use the order entity here
        productName: product.name, // Assuming 'name' is the field for product name
        productPrice: product.price,
      });

      const savedOrderItem = await this.orderItemsRepository.save(orderItem);
      orderItems.push(savedOrderItem);
    }

    return orderItems;
  }
}
