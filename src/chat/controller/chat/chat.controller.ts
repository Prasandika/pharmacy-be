import { ChatService } from './../../services/chat/chat.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ResponseDTO } from 'src/Interfaces/Models/responseDTO.model';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  async getAll(): Promise<ResponseDTO> {
    return { success: true, data: await this.chatService.findAll() };
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ResponseDTO> {
    return { success: true, data: await this.chatService.findOne(id) };
  }
}
