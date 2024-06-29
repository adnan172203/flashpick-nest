import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../product/entities/product.entity';
import { Repository } from 'typeorm';

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  findOne: jest.fn(),
  findOneByOrFail: jest.fn(),
};

const mockeOrder = {
  userId: '6ec3af70-207e-453f-84ac-69e0f4d0ce27',
  name: 'John Doe',
  totalCost: '100.00',
  orderStatus: 'Pending',
  paymentMethod: 'Credit Card',
  orderItems: [
    {
      productId: '64d2ca13-0601-457e-b48b-9b39b101774c',
      productName: 'Product 1',
      productImage: 'image1.jpg',
      productPrice: '20.00',
      quantity: '2',
    },
    {
      productId: 'd0dad0bd-1458-4cd5-bddf-5600d464c2b4',
      productName: 'Product 2',
      productImage: 'image2.jpg',
      productPrice: '30.00',
      quantity: '2',
    },
  ],
};

const mockProduct = {
  id: '64d2ca13-0601-457e-b48b-9b39b101774c',
  name: 'Product 1',
  price: '20.00',
};

describe('OrderService', () => {
  let service: OrderService;
  let ordersRepository: Order;
  let orderItemsRepository: OrderItem;
  let productsRepository: Product;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: getRepositoryToken(Order),
          useValue: mockRepository, // Provide a mock repository for Order
        },
        {
          provide: getRepositoryToken(OrderItem),
          useValue: mockRepository, // Provide a mock repository for OrderItem
        },
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository, // Provide a mock repository for Product
        },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
    ordersRepository = module.get(getRepositoryToken(Order));
    orderItemsRepository = module.get(getRepositoryToken(OrderItem));
    productsRepository = module.get(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create Product', () => {
    describe('when pass product params', () => {
      it('should create a new product', async () => {
        mockRepository.save.mockReturnValue(mockeOrder);

        mockRepository.findOneByOrFail.mockReturnValue(mockProduct);

        const savedProduct = await service.createOrder(mockeOrder);

        expect('Order Created Successfully').toBe(savedProduct);
      });
    });
  });
});
