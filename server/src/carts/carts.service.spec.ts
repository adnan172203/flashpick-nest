import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartsService } from './carts.service';
import { Cart } from './entities/cart.entity';
import { CartItem } from './cart-items/entities/cart-item.entity';
import { Product } from '../product/entities/product.entity';

import { CreateCartDto } from './dto/create-cart.dto';

describe('CartsService', () => {
  let service: CartsService;
  let cartsRepository: Repository<Cart>;
  let cartItemsRepository: Repository<CartItem>;
  let productsRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartsService,
        {
          provide: getRepositoryToken(Cart),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(CartItem),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CartsService>(CartsService);
    cartsRepository = module.get<Repository<Cart>>(getRepositoryToken(Cart));
    cartItemsRepository = module.get<Repository<CartItem>>(
      getRepositoryToken(CartItem)
    );
    productsRepository = module.get<Repository<Product>>(
      getRepositoryToken(Product)
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOrCreateCart', () => {
    it('should return existing cart if found', async () => {
      const mockCart = { id: '1', user: { id: 'user1' }, cartItems: [] };
      jest
        .spyOn(cartsRepository, 'findOne')
        .mockResolvedValue(mockCart as Cart);

      const result = await service.getOrCreateCart('user1');
      expect(result).toEqual(mockCart);
    });

    it('should create new cart if not found', async () => {
      const mockCart = { id: '1', user: { id: 'user1' }, cartItems: [] };
      jest.spyOn(cartsRepository, 'findOne').mockResolvedValue(null);
      jest.spyOn(cartsRepository, 'create').mockReturnValue(mockCart as Cart);
      jest.spyOn(cartsRepository, 'save').mockResolvedValue(mockCart as Cart);

      const result = await service.getOrCreateCart('user1');
      expect(result).toEqual(mockCart);
      expect(cartsRepository.create).toHaveBeenCalledWith({
        user: { id: 'user1' },
      });
      expect(cartsRepository.save).toHaveBeenCalledWith(mockCart);
    });
  });

  describe('addItemToCart', () => {
    it('should add new item to cart', async () => {
      const mockCart = { id: '1', user: { id: 'user1' }, cartItems: [] };
      const mockProduct = { id: 'prod1', price: 10 };
      const mockCartItem = {
        id: '1',
        cart: mockCart,
        product: mockProduct,
        quantity: 2,
        price: 10,
        total: 20,
      };
      const createCartDto: CreateCartDto = {
        productId: 'prod1',
        quantity: 2,
        price: 10,
        total: 20,
        id: '',
        userId: '',
        createdAt: undefined,
        updatedAt: undefined,
      };

      jest
        .spyOn(service, 'getOrCreateCart')
        .mockResolvedValue(mockCart as Cart);
      jest
        .spyOn(productsRepository, 'findOne')
        .mockResolvedValue(mockProduct as Product);
      jest.spyOn(cartItemsRepository, 'findOne').mockResolvedValue(null);
      jest
        .spyOn(cartItemsRepository, 'create')
        .mockReturnValue(mockCartItem as CartItem);
      jest
        .spyOn(cartItemsRepository, 'save')
        .mockResolvedValue(mockCartItem as CartItem);

      await service.addItemToCart('user1', createCartDto);

      expect(cartItemsRepository.create).toHaveBeenCalledWith({
        cart: mockCart,
        product: mockProduct,
        quantity: 2,
        price: 10,
        total: 20,
      });
      expect(cartItemsRepository.save).toHaveBeenCalledWith(mockCartItem);
    });

    it('should update existing item in cart', async () => {
      const mockCart = { id: '1', user: { id: 'user1' }, cartItems: [] };
      const mockProduct = { id: 'prod1', price: 10 };
      const existingCartItem = {
        id: '1',
        cart: mockCart,
        product: mockProduct,
        quantity: 1,
        price: 10,
        total: 10,
      };
      const createCartDto: CreateCartDto = {
        productId: 'prod1',
        quantity: 2,
        price: 10,
        total: 20,
        id: '',
        userId: '',
        createdAt: undefined,
        updatedAt: undefined,
      };

      jest
        .spyOn(service, 'getOrCreateCart')
        .mockResolvedValue(mockCart as Cart);
      jest
        .spyOn(productsRepository, 'findOne')
        .mockResolvedValue(mockProduct as Product);
      jest
        .spyOn(cartItemsRepository, 'findOne')
        .mockResolvedValue(existingCartItem as CartItem);
      jest.spyOn(cartItemsRepository, 'save').mockResolvedValue({
        ...existingCartItem,
        quantity: 3,
        total: 30,
      } as CartItem);

      await service.addItemToCart('user1', createCartDto);

      expect(cartItemsRepository.save).toHaveBeenCalledWith({
        ...existingCartItem,
        quantity: 3,
        total: 30,
      });
    });

    it('should throw error if product not found', async () => {
      const createCartDto: CreateCartDto = {
        productId: 'nonexistent',
        quantity: 1,
        price: 10,
        total: 10,
        id: '',
        userId: '',
        createdAt: undefined,
        updatedAt: undefined,
      };

      jest.spyOn(service, 'getOrCreateCart').mockResolvedValue({} as Cart);
      jest.spyOn(productsRepository, 'findOne').mockResolvedValue(null);

      await expect(
        service.addItemToCart('user1', createCartDto)
      ).rejects.toThrow('Product not found');
    });
  });

  describe('findAll', () => {
    it('should return all carts with relations', async () => {
      const mockCarts = [
        { id: '1', cartItems: [] },
        { id: '2', cartItems: [] },
      ];
      jest
        .spyOn(cartsRepository, 'find')
        .mockResolvedValue(mockCarts as Cart[]);

      const result = await service.findAll();

      expect(result).toEqual(mockCarts);
      expect(cartsRepository.find).toHaveBeenCalledWith({
        relations: ['cartItems', 'cartItems.product'],
      });
    });
  });

  describe('removeItemFromCart', () => {
    it('should remove item from cart and return updated cart', async () => {
      const mockCart = {
        id: '1',
        user: { id: 'user1' },
        cartItems: [],
        updatedAt: new Date(),
      };
      const mockCartItem = { id: 'item1', cart: mockCart };

      jest
        .spyOn(service, 'getOrCreateCart')
        .mockResolvedValue(mockCart as Cart);
      jest
        .spyOn(cartItemsRepository, 'delete')
        .mockResolvedValue({ affected: 1, raw: [] } as any);
      jest
        .spyOn(cartItemsRepository, 'find')
        .mockResolvedValue([{ id: 'item2' }] as CartItem[]);
      jest.spyOn(cartsRepository, 'save').mockResolvedValue(mockCart as Cart);

      const result = await service.removeItemFromCart('user1', 'item1');

      expect(result).toEqual(mockCart);
      expect(cartItemsRepository.delete).toHaveBeenCalledWith('item1');
      expect(cartsRepository.save).toHaveBeenCalled();
    });

    it('should return "Cart item not found" if item does not exist', async () => {
      const mockCart = { id: '1', user: { id: 'user1' }, cartItems: [] };

      jest
        .spyOn(service, 'getOrCreateCart')
        .mockResolvedValue(mockCart as Cart);
      jest
        .spyOn(cartItemsRepository, 'delete')
        .mockResolvedValue({ affected: 0, raw: [] });

      const result = await service.removeItemFromCart('user1', 'nonexistent');

      expect(result).toBe('Cart item not found');
    });

    it('should remove the entire cart if last item is removed', async () => {
      const mockCart = { id: '1', user: { id: 'user1' }, cartItems: [] };

      jest
        .spyOn(service, 'getOrCreateCart')
        .mockResolvedValue(mockCart as Cart);
      jest
        .spyOn(cartItemsRepository, 'delete')
        .mockResolvedValue({ affected: 1, raw: [] });
      jest.spyOn(cartItemsRepository, 'find').mockResolvedValue([]);
      jest.spyOn(cartsRepository, 'remove').mockResolvedValue(mockCart as Cart);

      const result = await service.removeItemFromCart('user1', 'lastItem');

      expect(result).toBe('Cart removed successfully');
      expect(cartsRepository.remove).toHaveBeenCalledWith(mockCart);
    });
  });
});
