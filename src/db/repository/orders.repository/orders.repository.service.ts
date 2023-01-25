import { Order } from './../../../api/orders/interfaces/order.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersRepositoryService {
  constructor(
    @InjectModel('Orders')
    private readonly orderModel: Model<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findOne({ _id: id });
  }

  async create(item: Order): Promise<Order> {
    const newItem = new this.orderModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndRemove(id);
  }
  async deleteByProductId(productId: string): Promise<Order> {
    return await this.orderModel.remove({ productId: productId });
  }

  async update(id: string, item: Order): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(id, item, {
      new: true,
    });
  }

  async getByUserId(userId: string): Promise<Order[]> {
    if (userId == 'all') {
      return await this.orderModel.find();
    } else {
      return await this.orderModel.find({ userId: userId });
    }
  }
}
