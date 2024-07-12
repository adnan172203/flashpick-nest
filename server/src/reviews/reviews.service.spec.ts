import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsService } from './reviews.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';

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

const mockReview = {
  productId: '1',
  userId: '2',
  comment: 'this is review',
  rating: 5,
};

const mockUser = {
  id: '2',
  name: 'Test User',
};
const mockProduct = {
  id: '1',
  name: 'product one',
  description: 'product one description',
  price: 2,
  // quantity: 2,
  // sku: '12',
  // color: 'red',
  // size: 'sdf',
  // stock: 12,
  // status: true,
  // fullDescription: 'sdf',
  // additionalText: 'sdf',
  // images: [
  //   {
  //     imageUrl: 'three.jpg',
  //   },
  //   {
  //     imageUrl: 'three-another.jpg',
  //   },
  // ],
};

describe('ReviewsService', () => {
  let service: ReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewsService,
        {
          provide: getRepositoryToken(Review),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ReviewsService>(ReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create Review', () => {
    describe('when pass review params', () => {
      it('should create a new category', async () => {
        mockRepository.findOne.mockResolvedValue(mockUser);

        mockRepository.save.mockReturnValue(mockReview);

        const savedCategory = await service.createReview(mockReview);

        expect(savedCategory).toBe(mockReview);
      });
    });
  });
});
