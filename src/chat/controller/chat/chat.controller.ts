import { ChatService } from './../../services/chat/chat.service';
import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  async getAll() {
    return await this.chatService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.chatService.findOne(id);
  }

  @Put(':userId/:socketId')
  async updateSocketId(
    @Param('userId') userId: string,
    @Param('socketId') socketId: string,
  ) {
    return await this.chatService.updateSocketId(userId, socketId);
  }
}
