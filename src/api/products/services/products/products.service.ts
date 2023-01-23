import { Product } from './../../interfaces/product.interface';
import { Injectable } from '@nestjs/common';
import { ProductsRepositoryService } from 'src/db/repository/products.repository/products.repository.service';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepositoryService) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.findAll();
  }

  async findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  async create(Product: Product): Promise<Product> {
    return this.productsRepository.create(Product);
  }

  async delete(id: string): Promise<Product> {
    return this.productsRepository.delete(id);
  }

  async update(id: string, product: Product): Promise<Product> {
    return this.productsRepository.update(id, product);
  }

  async buyProduct(productId: string, userId: string): Promise<Product> {
    return this.productsRepository.buyProduct(productId, userId);
  }

  async getProductsByBoughtId(userId: string): Promise<Product[]> {
    return this.productsRepository.getProductsByBoughtId(userId);
  }
}
