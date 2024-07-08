import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Category } from './entities/category.entity';

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
};

const mockCategory = {
  name: 'category one',
};

const categoriesWithProducts = [
  { id: 1, name: 'Category 1', products: [{ id: 1, name: 'Product 1' }] },
  { id: 2, name: 'Category 2', products: [{ id: 2, name: 'Product 2' }] },
];

const categoriesWithoutProducts = [
  { id: 1, name: 'Category 1', products: [] },
  { id: 2, name: 'Category 2', products: [] },
];

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create Category', () => {
    describe('when pass category params', () => {
      it('should create a new category', async () => {
        mockRepository.save.mockReturnValue(mockCategory);

        const savedCategory = await service.createCategory(mockCategory);

        expect(savedCategory).toBe(mockCategory);
      });
    });
  });

  describe('get all categories', () => {
    it('should be defined', () => {
      expect(service.findAllCategories).toBeDefined();
    });

    describe('when request', () => {
      it('should return all categories with their associated products', async () => {
        mockRepository.find.mockReturnValue(categoriesWithProducts);

        const result = await service.findAllCategories();

        expect(result).toEqual(categoriesWithProducts);
      });
      it('should handle categories with no associated products', async () => {
        mockRepository.find.mockReturnValue(categoriesWithoutProducts);

        const result = await service.findAllCategories();

        expect(result).toEqual(categoriesWithoutProducts);
      });
      it('should return an empty array if no categories are found', async () => {
        mockRepository.find.mockReturnValue([]);

        const result = await service.findAllCategories();

        expect(result).toEqual([]);
      });
    });
  });
});
