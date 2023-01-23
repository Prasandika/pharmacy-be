import { ProductDto } from './../../../products/dto/product.dto/product.dto';
import { Product } from 'src/api/products/interfaces/product.interface';
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
import { Cart } from '../../interfaces/cart.interface';
import { CartsService } from '../../services/carts/carts.service';

@Controller('carts')
export class CartsController {
  constructor(private cartsService: CartsService) {}

  @Get()
  async getAll(): Promise<Cart[]> {
    return await this.cartsService.findAll();
  }

  @Post()
  async createReservation(@Body() Cart: Cart): Promise<Cart> {
    return await this.cartsService.create(Cart);
  }

  @Get('filter')
  async getByUserId(@Query('userId') userId: string): Promise<Cart> {
    console.log('userId', userId);
    return await this.cartsService.findByUserId(userId);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Cart> {
    return await this.cartsService.findOne(id);
  }

  @Put('filter')
  async update(
    @Query('userId') id: string,
    @Body() updateCart: ProductDto[],
  ): Promise<Cart> {
    return await this.cartsService.update(id, updateCart);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cart> {
    return this.cartsService.delete(id);
  }
}
