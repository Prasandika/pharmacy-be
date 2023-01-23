import { Order } from './../../interfaces/order.interface';
import { Injectable } from '@nestjs/common';
import { OrdersRepositoryService } from 'src/db/repository/orders.repository/orders.repository.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepositoryService, // private readonly cartService: CartsService,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.findAll();
  }

  async findOne(id: string): Promise<Order> {
    return this.ordersRepository.findOne(id);
  }

  async create(Order: Order): Promise<Order> {
    // this.cartService.createOrder(order);
    return this.ordersRepository.create(Order);
  }

  async delete(id: string): Promise<Order> {
    return this.ordersRepository.delete(id);
  }

  async update(id: string, Order: Order): Promise<Order> {
    return this.ordersRepository.update(id, Order);
  }
}
