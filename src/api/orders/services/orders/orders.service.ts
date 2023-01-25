import { Order } from './../../interfaces/order.interface';
import { Injectable } from '@nestjs/common';
import { OrdersRepositoryService } from 'src/db/repository/orders.repository/orders.repository.service';
import { ProductsService } from 'src/api/products/services/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepositoryService, // private readonly cartService: CartsService,
    private readonly productsService: ProductsService, // private readonly cartService: CartsService,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.findAll();
  }

  async findOne(id: string): Promise<Order> {
    return this.ordersRepository.findOne(id);
  }

  async create(order: Order): Promise<Order> {
    const createdOrder = this.ordersRepository.create(order);
    this.productsService.reduceQuantity(order);

    return createdOrder;
  }

  async delete(id: string): Promise<Order> {
    return this.ordersRepository.delete(id);
  }

  async deleteByProductId(productId: string): Promise<Order> {
    return this.ordersRepository.deleteByProductId(productId);
  }

  async update(id: string, Order: Order): Promise<Order> {
    return this.ordersRepository.update(id, Order);
  }

  async getByUserId(userId: string): Promise<Order[]> {
    return this.ordersRepository.getByUserId(userId);
  }
}
