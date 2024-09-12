import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinTable,
  JoinColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { OrderItem } from './order-item.entity';
import { ShippingAddress } from './shipping-address.entity';
@Entity()
export class Order {
  create(create: any) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  @ManyToOne(() => User, (user) => user.orders)
  userId: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  totalPrice: string;

  @Column({ type: 'varchar' })
  orderStatus: string;

  @Column({ type: 'varchar' })
  paymentMethod: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.orderId, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  orderItems: OrderItem[];

  @OneToOne(() => ShippingAddress, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  shippingAddress: ShippingAddress;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  save: any;
}
