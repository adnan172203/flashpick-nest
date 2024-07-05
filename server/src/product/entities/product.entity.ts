import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';

import { OrderItem } from '../../order/entities/order-item.entity';
import { ProductImageGallery } from './product-image-gallery-entity';
import { Category } from './category.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'varchar', length: 255 })
  sku: string;

  @Column({ type: 'varchar', length: 255 })
  color: string;

  @Column({ type: 'varchar', length: 255 })
  size: string;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'boolean' })
  status: boolean;

  @Column({ type: 'text' })
  fullDescription: string;

  @Column({ type: 'text' })
  additionalText: string;

  @OneToMany(() => ProductImageGallery, (image) => image.productId)
  images: ProductImageGallery[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.productId)
  orderItems: OrderItem[];

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
  findOneByOrFail: any;
}
