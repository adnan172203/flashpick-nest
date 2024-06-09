import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, (order) => order.orderItems)
  orderId: Order;

  @ManyToOne(() => Product, (product) => product.orderItems)
  productId: Product;

  @Column()
  productName: string;

  @Column()
  productImage: string;

  @Column()
  productPrice: string;

  @Column()
  quantity: string;
}
