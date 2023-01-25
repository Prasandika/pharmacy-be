import { OrdersService } from './../../../orders/services/orders/orders.service';
import { Product } from './../../interfaces/product.interface';
import { Injectable } from '@nestjs/common';
import { ProductsRepositoryService } from 'src/db/repository/products.repository/products.repository.service';
import { Order } from 'src/api/orders/interfaces/order.interface';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepositoryService,
  ) // private ordersService: OrdersService,
  {}

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
    // this.ordersService.deleteByProductId(id);

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

  async reduceQuantity(order: Order): Promise<Product> {
    const product = await this.findOne(order.productId);
    product.quantity -= order.quantity;

    this.update(order.productId, product);

    return product;
  }
}
