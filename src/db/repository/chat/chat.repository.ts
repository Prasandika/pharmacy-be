import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, Message } from 'src/chat/services/chat/chat.interface';

@Injectable()
export class ChatRepository {
  constructor(
    @InjectModel('Chat')
    private readonly chatModel: Model<Chat>,
  ) {}

  async findAll(): Promise<Chat[]> {
    return await this.chatModel.find();
  }

  async findOne(id: string): Promise<Chat> {
    return await this.chatModel.findOne({ userId: id });
  }

  async create(item: Chat): Promise<Chat> {
    const newItem = new this.chatModel(item);

    return await newItem.save();
  }

  async delete(id: string): Promise<Chat> {
    return await this.chatModel.findByIdAndRemove(id);
  }

  async update(userId: string, message: Message): Promise<any> {
    // return await this.chatModel.findByIdAndUpdate(id, reservation, {
    //   new: true,
    // });
    return this.chatModel.update(
      { userId: userId },
      { $push: { messages: message } },
    );
  }

  async getChat(userId: string): Promise<Chat[]> {
    //return await this.chatModel.find({ senderId: userId,receiverUserId:userId});
    return await this.chatModel.find({
      $or: [{ senderId: userId }, { receiverUserId: userId }],
    });
  }

  async updateSocketId(userId: string, socketId: string): Promise<any> {
    return await this.chatModel.updateOne(
      { userId: userId },
      { socketId: socketId },
    );
  }
}
