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
import { Category } from '../../categories/entities/category.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { Review } from '../../reviews/entities/review.entity';
import { CartItem } from '../../carts/cart-items/entities/cart-item.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'varchar', length: 255 })
  sku: string;

  @Column({ type: 'json', default: [] })
  color: string[];

  @Column({ type: 'varchar', length: 255 })
  size: string;

  @Column({ type: 'text' })
  fullDescription: string;

  @Column({ type: 'text' })
  shortDescription: string;

  @Column({ type: 'text' })
  additionalText: string;

  @OneToMany(() => ProductImageGallery, (image) => image.productId)
  images: ProductImageGallery[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.productId)
  orderItems: OrderItem[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @OneToMany(() => CartItem, (cartItem) => cartItem.product)
  cartItems: CartItem[];

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({ name: 'product_to_category' })
  categories: Category[];

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable({ name: 'product_to_tag' })
  tags: Tag[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
  findOneByOrFail: any;
}
