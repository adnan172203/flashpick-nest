import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsService } from './reviews.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';
import { NotFoundException } from '@nestjs/common';

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
      it('should create a new review', async () => {
        mockRepository.findOne.mockResolvedValue(mockUser);

        mockRepository.save.mockReturnValue(mockReview);

        const savedReview = await service.createReview(mockReview);

        expect(savedReview).toBe(mockReview);
      });
    });
  });

  describe('Get all reviews', () => {
    it('should be defined', () => {
      expect(service.findAllReviews).toBeDefined();
    });

    describe('when request', () => {
      it('should return all reviews', async () => {
        mockRepository.find.mockReturnValue(mockReview);

        const result = await service.findAllReviews();

        expect(result).toEqual(mockReview);
      });

      it('should return an empty array if no reviews are found', async () => {
        mockRepository.find.mockReturnValue([]);

        const result = await service.findAllReviews();

        expect(result).toEqual([]);
      });
    });
  });

  describe('Get review by id', () => {
    it('should be defined', () => {
      expect(service.findReviewById).toBeDefined();
    });

    describe('when request with id', () => {
      it('should fetch the specific review', async () => {
        const expectedReview = new Review();
        expectedReview.id = '1';
        expectedReview.comment = 'Mock Review';

        mockRepository.findOne.mockReturnValue(expectedReview);

        const result = await service.findReviewById('1');

        expect(result).toEqual(expectedReview);
      });
    });
    describe('when review does not exist', () => {
      it('should throw a NotFoundException', async () => {
        const reviewId = '1';

        // mockRepository.findOne.mockResolvedValue(undefined);
        mockRepository.findOne.mockRejectedValue(new NotFoundException());

        await expect(service.findReviewById(reviewId)).rejects.toThrow(
          NotFoundException
        );

        expect(mockRepository.findOne).toHaveBeenCalledWith({
          where: { id: reviewId },
          relations: ['product'],
        });
      });
    });
  });

  describe('update Review', () => {
    describe('when update the review id with params', () => {
      it('should update the category', async () => {
        const expectedReview = new Review();
        expectedReview.id = '1';
        expectedReview.comment = 'Mock Review';

        mockRepository.findOne.mockReturnValue(expectedReview);
        mockRepository.preload.mockResolvedValue(expectedReview);

        const updatedReview = {
          productId: '1',
          userId: '2',
          comment: 'this is review',
          rating: 5,
        };

        const savedCategory = await service.updateReview('1', updatedReview);

        expect(savedCategory).toBeDefined();
      });
    });
    describe('otherwise', () => {
      it('should throw a NotFoundException if the revie is not found', async () => {
        mockRepository.findOne.mockReturnValue(null);
        await expect(service.updateReview('456', {})).rejects.toThrow(
          NotFoundException
        );
      });
    });
  });
});
