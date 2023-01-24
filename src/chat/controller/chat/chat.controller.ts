import { ChatService } from './../../services/chat/chat.service';
import { Controller, Get, Param } from '@nestjs/common';

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
}
