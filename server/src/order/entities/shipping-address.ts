import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { Order } from './order.entity'; // Assuming you have an Order entity

@Entity()
export class ShippingAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Order, (order) => order.shippingAddress)
  order: Order;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  country: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  zipCode: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  save: any;
}
