import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findCategoryById(id: string) {
    const category = this.categoryRepository.findOne({
      where: { id },
      relations: ['products'],
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }
}
