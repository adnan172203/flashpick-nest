import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Order } from '../../order/entities/order.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Cart } from '../../carts/entities/cart.entity';
import { SocialLink } from '../../social-links/entities/social-link.entity';
import { Role } from '../user-management/enums/role.enum';

// export enum UserRole {
//   ADMIN = 'admin',
//   USER = 'user',
// }
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @OneToMany(() => SocialLink, (social) => social.user)
  socialLinks: SocialLink[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => Order, (order) => order.userId)
  orders: Order[];

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
