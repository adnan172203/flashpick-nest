import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../product/entities/product.entity';
import { NotFoundException } from '@nestjs/common';

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  findOne: jest.fn(),
  findOneByOrFail: jest.fn(),
};

const mockOrder = {
  userId: '6ec3af70-207e-453f-84ac-69e0f4d0ce27',
  name: 'John Doe',
  totalPrice: '100.00',
  orderStatus: 'Pending',
  paymentMethod: 'Credit Card',
  shippingAddress: {
    firstName: 'john',
    lastName: 'cena',
    country: 'canada',
    address: 'van couver',
    city: 'van',
    zipCode: '23',
    phone: '12312313',
    email: 'abc@gmail.com',
  },
  orderItems: [
    {
      id: '5678',
      orderId: '1234',
      productId: '64d2ca13-0601-457e-b48b-9b39b101774c',
      productName: 'Product 1',
      productImage: 'image1.jpg',
      productPrice: '20.00',
      quantity: '2',
    },
    {
      id: '5678',
      orderId: '1234',
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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create Order', () => {
    describe('when pass order params', () => {
      it('should create a new order', async () => {
        mockRepository.create.mockReturnValue(mockOrder);

        mockRepository.save.mockReturnValue(mockOrder);

        mockRepository.findOneByOrFail.mockReturnValue(mockProduct);

        const savedOrder = await service.createOrder(mockOrder);

        expect(savedOrder).toBe(mockOrder);
      });
    });
  });
  describe('find All Orders', () => {
    it('should be defined', () => {
      expect(service.getAllOrders).toBeDefined();
    });

    describe('when fetch orders', () => {
      it('should return all orders when orders exist in the database', async () => {
        const mockOrders = [
          {
            id: '1',
            userId: 'user1',
            name: 'Order 1',
            totalCost: '100',
            orderStatus: 'Pending',
            paymentMethod: 'Credit Card',
          },
          {
            id: '2',
            userId: 'user2',
            name: 'Order 2',
            totalCost: '200',
            orderStatus: 'Completed',
            paymentMethod: 'PayPal',
          },
        ];

        mockRepository.find.mockReturnValue(mockOrders);

        const result = await service.getAllOrders();

        expect(result).toEqual(mockOrders);
        expect(mockRepository.find).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('get single order', () => {
    it('should be defined', () => {
      expect(service.getOrder).toBeDefined();
    });

    describe('when request with id', () => {
      it('should return the order', async () => {
        mockRepository.findOne.mockReturnValue(mockOrder);

        const result = await service.getOrder('1');

        expect(result).toEqual(mockOrder);
      });
    });
    describe('when request with wrong id', () => {
      // Should throw a NotFoundException if order with given id does not exist
      it('should throw a NotFoundException if order with given id does not exist', async () => {
        const orderId = '1';

        mockRepository.findOne.mockResolvedValue(undefined);

        await expect(service.getOrder(orderId)).rejects.toThrow(
          NotFoundException
        );
        expect(mockRepository.findOne).toHaveBeenCalledWith({
          where: { id: orderId },
          relations: ['orderItems'],
        });
      });
    });
  });

  describe('when pass id', () => {
    it('should delete the order', async () => {
      mockRepository.findOneBy.mockReturnValue(mockOrder);

      await service.deleteOrder('1');

      expect(mockRepository.remove).toHaveBeenCalledWith(mockOrder);
    });
  });
  describe('otherwise', () => {
    it('should throw NotFoundException for non-existing order', async () => {
      mockRepository.findOneBy.mockReturnValue(null);

      await expect(service.deleteOrder('456')).rejects.toThrow(
        NotFoundException
      );
    });
  });
});
