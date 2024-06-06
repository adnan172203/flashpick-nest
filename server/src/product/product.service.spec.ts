// import { Test, TestingModule } from '@nestjs/testing';
// import { ProductService } from './product.service';

// describe('ProductService', () => {
//   let service: ProductService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [ProductService],
//     }).compile();

//     service = module.get<ProductService>(ProductService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';

// type MockRepositoryType<T = any> = Partial<
//   Record<keyof Repository<T>, jest.Mock>
// >;

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  findOne: jest.fn(),
};

// const mockProduct = {
//   id: '1',
//   name: 'product one',
//   description: 'product one description',
//   price: 2,
//   quantity: 2,
//   sku: '12',
//   color: 'red',
//   size: 'sdf',
//   stock: 12,
//   status: true,
//   fullDescription: 'sdf',
//   additionalText: 'sdf',
//   images: [{ imageUrl: 'three.jpg' }, { imageUrl: 'three-another.jpg' }],
//   productId: "123"
// };

const mockProduct = {
  id: '1',
  name: 'product one',
  description: 'product one description',
  price: 2,
  quantity: 2,
  sku: '12',
  color: 'red',
  size: 'sdf',
  stock: '12',
  status: true,
  fullDescription: 'sdf',
  additionalText: 'sdf',
};

describe('Product Service', () => {
  // const mockRepository = {
  //   create: jest.fn().mockReturnValue({ ...productParams }),
  //   save: jest.fn().mockReturnValue({ ...productParams }),
  // };

  let service: ProductService;
  // let productRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    // productRepository = module.get(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create Product', () => {
    describe('when pass product params', () => {
      it('should create a new product', async () => {
        mockRepository.save.mockReturnValue(mockProduct);

        const savedProduct = await service.createProduct(mockProduct);

        expect(savedProduct).toBe(mockProduct);
      });
    });
  });
});
