import { Message } from './../../../Interfaces/chat.interface';
import { Chat } from 'src/Interfaces/chat.interface';
import { Injectable } from '@nestjs/common';
import { ChatRepository } from 'src/DB/Repositories/chat/chat.repository';

@Injectable()
export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  findAll(): Promise<Chat[]> {
    return this.chatRepository.findAll();
  }

  async findOne(id: string): Promise<Chat> {
    return this.chatRepository.findOne(id);
  }

  async create(chat: Chat): Promise<Chat> {
    return this.chatRepository.create(chat);
  }

  async delete(id: string): Promise<Chat> {
    return this.chatRepository.delete(id);
  }

  async update(chat: Message, id: string): Promise<any> {
    return this.chatRepository.update(id, chat);
  }
}
