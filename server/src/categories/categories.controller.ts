import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryDto, updateCategoryDto } from './dto/category.dto';
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

  @Put('/:id')
  update(@Param('id') id: string, @Body() body: updateCategoryDto) {
    return this.categoriesService.updateCategory(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }
}
