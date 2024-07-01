import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { OrderItem } from '../../order/entities/order-item.entity';
import { ProductImageGallery } from './product-image-gallery-entity';

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

  @Column({ type: 'varchar', length: 255 })
  stock: string;

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

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
  findOneByOrFail: any;
}
