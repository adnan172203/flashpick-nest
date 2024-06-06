import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, UpdateProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() product: ProductDto) {
    return this.productService.createProduct(product);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productService.updateProduct(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
