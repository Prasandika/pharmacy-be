import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatRepository } from 'src/DB/Repositories/chat/chat.repository';
import ChatSchema from 'src/DB/Schemas/chat.schema';
import { ChatGateway } from './gateway/chat.gateway';
import { ChatService } from './services/chat/chat.service';
import { ChatController } from './controller/chat/chat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }])],
  providers: [ChatGateway, ChatService, ChatRepository],
  controllers: [ChatController],
})
export class ChatModule {}
