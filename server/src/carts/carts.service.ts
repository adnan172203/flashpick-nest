import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../product/entities/product.entity';
import { Repository } from 'typeorm';
import { CartItem } from './cart-items/entities/cart-item.entity';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartsRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemsRepository: Repository<CartItem>,
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>
  ) {}

  async getOrCreateCart(userId: string): Promise<Cart> {
    let cart = await this.cartsRepository.findOne({
      where: { user: { id: userId } },
      relations: ['cartItems', 'cartItems.product'],
    });

    if (!cart) {
      cart = this.cartsRepository.create({ user: { id: userId } });
      await this.cartsRepository.save(cart);
    }

    return cart;
  }

  async addItemToCart(userId: string, CartDto: CreateCartDto): Promise<Cart> {
    const { productId, quantity, price, total } = CartDto;

    const cart = await this.getOrCreateCart(userId);
    const product = await this.productsRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    // Check if the item already exists in the cart

    let cartItem = await this.cartItemsRepository.findOne({
      where: { cart: { id: cart.id }, product: { id: productId } },
    });

    if (cartItem) {
      cartItem.quantity += quantity;
      cartItem.total = cartItem.quantity * price;
    } else {
      cartItem = this.cartItemsRepository.create({
        cart,
        product,
        quantity,
        price,
        total: quantity * price,
      });
    }

    await this.cartItemsRepository.save(cartItem);
    // cart.updatedAt = new Date();
    // await this.cartsRepository.save(cart);

    return this.getOrCreateCart(userId);
  }
  findAll() {
    return this.cartsRepository.find({
      relations: ['cartItems', 'cartItems.product'],
    });
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
