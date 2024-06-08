import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from 'src/user/entities/user.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  @ManyToOne(() => User, (user) => user.orders)
  userId: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  totalCost: string;

  @Column({ type: 'timestamp' })
  orderDate: Date;

  @Column({ type: 'varchar' })
  orderStatus: string;

  @Column({ type: 'varchar' })
  paymentMethod: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
