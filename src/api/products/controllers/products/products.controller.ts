import { Product } from './../../interfaces/product.interface';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Post()
  async create(@Body() Product: Product): Promise<Product> {
    return await this.productsService.create(Product);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product> {
    return await this.productsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProduct: Product,
  ): Promise<Product> {
    return await this.productsService.update(id, updateProduct);
  }

  @Get('buy/:productId/:userId')
  async buyProduct(
    @Param('productId') productId: string,
    @Param('userId') userId: string,
  ) {
    return await this.productsService.buyProduct(productId, userId);
  }

  @Get('boughtProducts/:userId')
  async getProductsByBoughtId(
    @Param('userId') userId: string,
  ): Promise<Product[]> {
    return this.productsService.getProductsByBoughtId(userId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Product> {
    return this.productsService.delete(id);
  }
}
