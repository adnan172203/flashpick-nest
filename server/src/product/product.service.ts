import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductImageGallery } from './entities/product-image-gallery-entity';

interface ProductImage {
  imageUrl: string;
}

interface ProductParams {
  name: string;
  description: string;
  price: number;
  quantity: number;
  sku: string;
  color?: string;
  size?: string;
  stock: number;
  status: boolean;
  fullDescription: string;
  additionalText: string;
  images?: ProductImage[];
}

interface UpdateProductParams {
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  sku?: string;
  color?: string;
  size?: string;
  stock?: number;
  status?: boolean;
  fullDescription?: string;
  additionalText?: string;
  images?: ProductImage[];
}

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImageGallery)
    private readonly productImageRepository: Repository<ProductImageGallery>
  ) {}

  async createProduct({ ...product }: ProductParams) {
    let { images, ...productData } = product;
    const newProduct = this.productRepository.create(productData);

    const savedProduct = await this.productRepository.save(newProduct);

    this.createProductWithImage(savedProduct, images);

    return savedProduct;
  }

  async updateProduct(
    id: string,
    { images, ...productData }: UpdateProductParams
  ) {
    const existingProduct = await this.productRepository.findOne({
      where: { id },
      relations: ['images'],
    });

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    // Update the product details
    await this.productRepository.update(id, productData);

    if (images && images.length > 0) {
      // Remove existing images
      await this.productImageRepository.delete({ productId: existingProduct });

      // Add new images
      await this.createProductWithImage(existingProduct, images);
    }

    return this.productRepository.findOne({
      where: { id },
      relations: ['images'],
    });
  }

  async getAllProducts() {
    return this.productRepository.find({
      relations: ['images', 'categories', 'reviews'],
    });
  }

  async getProduct(id: string) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['images'],
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async deleteProduct(id: string) {
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('product not found');
    }

    return this.productRepository.remove(product);
  }

  private async createProductWithImage(
    product: Product,
    productImages: ProductImage[]
  ) {
    const promiseItems = productImages.map(({ imageUrl }: ProductImage) => {
      return this.productImageRepository.save({
        productId: product,
        imageUrl,
      });
    });

    await Promise.all(promiseItems);
  }
}
