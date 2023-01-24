import { CartDto } from './../../../carts/dto/cart.dto/cart.dto';
import { User } from './../../interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from 'src/db/repository/users.repository/users.repository.service';
import { Chat } from 'src/chat/services/chat/chat.interface';

@Injectable()
export class UsersService {
  constructor(private readonly UserRepository: UsersRepositoryService) {}

  findAll(): Promise<User[]> {
    return this.UserRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.UserRepository.findOne(id);
  }

  async create(User: User): Promise<User> {
    const user = await this.UserRepository.create(User);
    const cart = new CartDto();
    cart.userId = user.id;
    // this.cartsService.create(cart);

    const chatObj = new Chat();
    chatObj.userId = user.id;
    chatObj.messages = [];
    // await this.chatService.create(chatObj);

    return user;
  }

  async delete(id: string): Promise<User> {
    return this.UserRepository.delete(id);
  }

  async update(id: string, User: User): Promise<User> {
    return this.UserRepository.update(id, User);
  }

  async authenticateUser(email: string, password: string): Promise<User> {
    return this.UserRepository.authenticateUser(email, password);
  }
}
