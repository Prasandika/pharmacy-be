import { IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';

import { ProductDto } from 'src/api/products/dto/product.dto/product.dto';

export class CartDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @IsNotEmpty()
  products: ProductDto[];

  @IsNumber()
  @IsNotEmpty()
  total: number;

  constructor() {
    this.total = 0;
  }
}
