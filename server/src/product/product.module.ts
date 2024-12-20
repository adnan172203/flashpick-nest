import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductImageGallery } from './entities/product-image-gallery-entity';
import { Category } from '../categories/entities/category.entity';
import { Tag } from 'src/tags/entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductImageGallery, Category, Tag]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
