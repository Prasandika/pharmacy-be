import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/api/users/interfaces/user.interface';

@Injectable()
export class UsersRepositoryService {
  constructor(
    @InjectModel('Users')
    private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async create(item: User): Promise<User> {
    const user = await this.userModel.findOne({
      email: item.email,
    });

    if (user) {
      throw new ForbiddenException('Email already taken');
    }

    const newItem = new this.userModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
  }

  async authenticateUser(email: string): Promise<User> {
    const user = await this.userModel.findOne({
      email: email,
    });
    if (!user) {
      throw new ForbiddenException('Error: No user found');
    }
    return user;
  }
}
