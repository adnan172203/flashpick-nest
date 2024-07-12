import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}
  async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
    const { userId, productId, rating, comment } = createReviewDto;

    // Check if user exists
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    // Check if product exists
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product) {
      throw new Error('Product not found');
    }

    // Create new review
    const review = this.reviewRepository.create({
      user,
      product,
      rating,
      comment,
    });

    // Save the review
    return this.reviewRepository.save(review);
  }

  findAllReviews() {
    return this.reviewRepository.find();
  }

  findReviewById(id: string) {
    const review = this.reviewRepository.findOne({
      where: { id },
      relations: ['products'],
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    return review;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
