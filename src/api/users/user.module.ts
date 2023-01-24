import { ChatModule } from './../../chat/chat.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UsersSchema from 'src/db/schemas/users.schema';
import { UserController } from './controllers/users/users.controller';

import { UsersService } from './services/users/users.service';
import { CartsModule } from '../carts/carts.module';
import { UsersRepositoryService } from 'src/db/repository/users.repository/users.repository.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [UserController],
  providers: [UsersRepositoryService, UsersService],
})
export class UsersModule {}
