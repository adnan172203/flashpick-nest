import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, UpdateProductDto } from './dto/product.dto';
import { Auth } from 'src/user/iam/authentication/decorators/auth.decorators';
import { AuthType } from 'src/user/iam/authentication/enums/auth-type.enum';
import { Role } from 'src/user/user-management/enums/role.enum';
import { Roles } from 'src/user/iam/authorization/decorators/roles.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() product: ProductDto) {
    return this.productService.createProduct(product);
  }

  @Get('')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
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
