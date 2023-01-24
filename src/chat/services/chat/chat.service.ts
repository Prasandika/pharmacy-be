import { Injectable } from '@nestjs/common';
import { ChatRepository } from 'src/db/repository/chat/chat.repository';
import { Chat, Message } from './chat.interface';

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
    const oldChat = await this.chatRepository.findOne(chat.userId);
    if (oldChat) {
      return this.updateSocketId(chat.userId, chat.socketId);
    } else {
      return this.chatRepository.create(chat);
    }
  }

  async delete(id: string): Promise<Chat> {
    return this.chatRepository.delete(id);
  }

  async update(chat: Message, userId: string): Promise<any> {
    return this.chatRepository.update(userId, chat);
  }

  async updateSocketId(userId: string, socketId: string): Promise<any> {
    return this.chatRepository.updateSocketId(userId, socketId);
  }

  async getChatByUserId(userId: string): Promise<Chat> {
    const chat = await this.chatRepository.findByUserId(userId);
    return chat;
  }
}
