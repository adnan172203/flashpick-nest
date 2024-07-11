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
  preload: jest.fn(),
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

  describe('Get category by id', () => {
    it('should be defined', () => {
      expect(service.findCategoryById).toBeDefined();
    });

    describe('when request with id', () => {
      it('should fetch the specific category', async () => {
        const expectedCategory = new Category();
        expectedCategory.id = '1';
        expectedCategory.name = 'Mock Category';

        mockRepository.findOne.mockReturnValue(expectedCategory);

        const result = await service.findCategoryById('1');

        expect(result).toEqual(expectedCategory);
      });
    });
    describe('when category does not exist', () => {
      it('should throw a NotFoundException', async () => {
        const categoryId = '1';

        // mockRepository.findOne.mockResolvedValue(undefined);
        mockRepository.findOne.mockRejectedValue(new NotFoundException());

        await expect(service.findCategoryById(categoryId)).rejects.toThrow(
          NotFoundException
        );

        expect(mockRepository.findOne).toHaveBeenCalledWith({
          where: { id: categoryId },
          relations: ['products'],
        });
      });
    });
  });

  describe('update Category', () => {
    describe('when update the product id with params', () => {
      it('should update the product', async () => {
        const newCategory = new Category();
        newCategory.id = '1';
        newCategory.name = 'Mock Category';

        mockRepository.findOne.mockReturnValue(newCategory);
        mockRepository.preload.mockResolvedValue(newCategory);

        const updatedCategory = { name: 'Updated Name' };

        const savedCategory = await service.updateCategory(
          '1',
          updatedCategory
        );

        expect(savedCategory).toBeDefined();
      });
    });
    describe('otherwise', () => {
      it('should throw a NotFoundException if the category is not found', async () => {
        mockRepository.findOne.mockReturnValue(null);
        await expect(service.updateCategory('456', {})).rejects.toThrow(
          NotFoundException
        );
      });
    });
  });
});
