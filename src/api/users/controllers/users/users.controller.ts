import { UserDto } from './../../dto/user.dto/user.dto';
import { UsersService } from './../../services/users/users.service';
import { User } from './../../interfaces/user.interface';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() User: UserDto): Promise<User> {
    console.log('Hi');
    return await this.userService.create(User);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post('authenticate')
  async authenticateUser(
    @Body() obj: { email: string; password: string },
  ): Promise<User> {
    return await this.userService.authenticateUser(obj.email, obj.password);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUser: User,
  ): Promise<User> {
    return await this.userService.update(id, updateUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
