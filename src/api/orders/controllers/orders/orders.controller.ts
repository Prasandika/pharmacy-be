import { Order } from './../../interfaces/order.interface';
import { OrdersService } from './../../services/orders/orders.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  async getAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }

  @Post()
  async create(@Body() Order: Order): Promise<Order> {
    return await this.orderService.create(Order);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Order> {
    return await this.orderService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrder: Order,
  ): Promise<Order> {
    return await this.orderService.update(id, updateOrder);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Order> {
    return this.orderService.delete(id);
  }
}
