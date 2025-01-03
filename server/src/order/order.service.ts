import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../product/entities/product.entity';
import { OrderItemDTO } from './dto/order-item.dto';

interface CreateOrderParams {
  id?: string;
  userId: string;
  name: string;
  totalPrice: string;
  orderStatus: string;
  paymentMethod: string;
  orderItems: OrderItemDTO[];
  shippingAddress: {
    firstName: string;
    lastName: string;
    country: string;
    address: string;
    city: string;
    zipCode: string;
    phone: string;
    email: string;
  };
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

  // async createOrder({
  //   id,
  //   userId,
  //   name,
  //   totalPrice,
  //   orderStatus,
  //   paymentMethod,
  //   orderItems,
  //   shippingAddress,
  // }: CreateOrderParams) {
  //   const order = this.ordersRepository.create({
  //     id,
  //     userId,
  //     name,
  //     totalPrice,
  //     orderStatus,
  //     paymentMethod,
  //     shippingAddress,
  //   });

  //   console.log('id========>>>>>.', id);

  //   const savedOrder = await this.ordersRepository.save(order);

  //   const savedOrderItems = await this.createOrderItemWithPrice(
  //     orderItems,
  //     savedOrder
  //   );

  //   savedOrder.orderItems = savedOrderItems;

  //   return order;
  // }

  async createOrder({
    id,
    userId,
    name,
    totalPrice,
    orderStatus,
    paymentMethod,
    orderItems,
    shippingAddress,
  }: CreateOrderParams) {
    return await this.ordersRepository.manager.transaction(
      async (entityManager: EntityManager) => {
        const order = entityManager.create(Order, {
          id,
          userId,
          name,
          totalPrice,
          orderStatus,
          paymentMethod,
          shippingAddress,
        });

        const savedOrder = await entityManager.save(Order, order);

        const savedOrderItems = await this.createOrderItemWithPrice(
          orderItems,
          savedOrder,
          entityManager
        );

        savedOrder.orderItems = savedOrderItems;

        return savedOrder;
      }
    );
  }

  async getAllOrders() {
    return this.ordersRepository.find({
      relations: ['orderItems', 'shippingAddress'],
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

  async deleteOrder(id: string) {
    const order = await this.ordersRepository.findOneBy({ id });

    if (!order) {
      throw new NotFoundException('order not found');
    }

    return this.ordersRepository.remove(order);
  }

  // private async createOrderItemWithPrice(orderItemsDto: any[], order: any) {
  //   const orderItems = [];

  //   for (const orderItemDto of orderItemsDto) {
  //     const { productId } = orderItemDto;

  //     const product = await this.productsRepository.findOne({
  //       where: { id: productId },
  //     });

  //     if (!product) {
  //       throw new NotFoundException('product not found for place order item');
  //     }

  //     const orderItem = this.orderItemsRepository.create({
  //       ...orderItemDto,
  //       orderId: order.id, // Use the order entity here
  //       productName: product.name,
  //       productPrice: product.price,
  //     });

  //     const savedOrderItem = await this.orderItemsRepository.save(orderItem);
  //     orderItems.push(savedOrderItem);
  //   }

  //   return orderItems;
  // }

  private async createOrderItemWithPrice(
    orderItemsDto: any[],
    order: any,
    entityManager: EntityManager
  ) {
    const orderItems = [];

    for (const orderItemDto of orderItemsDto) {
      const { productId } = orderItemDto;

      const product = await entityManager.findOne(Product, {
        where: { id: productId },
      });

      if (!product) {
        throw new NotFoundException('product not found for place order item');
      }

      const orderItem = entityManager.create(OrderItem, {
        ...orderItemDto,
        orderId: order.id, // Use the order entity here
        productName: product.name,
        productPrice: product.price,
      });

      const savedOrderItem = await entityManager.save(OrderItem, orderItem);
      orderItems.push(savedOrderItem);
    }

    return orderItems;
  }
}
