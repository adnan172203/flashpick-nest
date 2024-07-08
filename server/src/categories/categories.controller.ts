import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create')
  async create(@Body() category: CategoryDto) {
    return this.categoriesService.createCategory(category);
  }
  @Get('')
  async findAll() {
    return this.categoriesService.findAllCategories();
  }
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.categoriesService.findCategoryById(id);
  }
}
