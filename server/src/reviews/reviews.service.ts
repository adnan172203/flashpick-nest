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
      relations: ['product'],
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    return review;
  }

  async updateReview(id: string, updateReviewDto: UpdateReviewDto) {
    const { userId, productId, rating, comment } = updateReviewDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const existingReview = await this.reviewRepository.findOne({
      where: { id },
    });

    if (existingReview.id !== id) {
      throw new NotFoundException('Review not found');
    }

    const preloadedReview = await this.reviewRepository.preload({
      id,
      user,
      product,
      rating,
      comment,
    });

    if (!preloadedReview) {
      throw new NotFoundException('Review not found');
    }

    this.reviewRepository.save(preloadedReview);

    return 'Review updated';
  }

  async deleteReviews(id: string) {
    const review = await this.reviewRepository.findOneBy({ id });

    if (!review) {
      throw new NotFoundException('review not found');
    }

    await this.reviewRepository.remove(review);

    return 'Review deleted';
  }
}
