import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ChatSchema from 'src/db/schemas/chat.schema';
import { ChatGateway } from './gateway/chat.gateway';
import { ChatService } from './services/chat/chat.service';
import { ChatController } from './controller/chat/chat.controller';
import { ChatRepository } from 'src/db/repository/chat/chat.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }])],
  providers: [ChatGateway, ChatService, ChatRepository],
  controllers: [ChatController],
})
export class ChatModule {}
