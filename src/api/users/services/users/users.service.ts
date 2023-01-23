import { CartDto } from './../../../carts/dto/cart.dto/cart.dto';
import { User } from './../../interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { CartsService } from 'src/api/carts/services/carts/carts.service';
import { UsersRepositoryService } from 'src/db/repository/users.repository/users.repository.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly UserRepository: UsersRepositoryService,
    private readonly cartsService: CartsService,
  ) {}

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
