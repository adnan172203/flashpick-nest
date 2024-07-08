import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async createCategory({ ...category }) {
    return this.categoryRepository.save(category);
  }

  async findAllCategories() {
    return this.categoryRepository.find({
      relations: ['products'],
    });
  }
}
