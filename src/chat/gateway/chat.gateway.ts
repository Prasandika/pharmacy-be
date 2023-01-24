import { Chat } from 'src/Interfaces/chat.interface';
import { Message } from './../../Interfaces/chat.interface';
import { ChatService } from './../services/chat/chat.service';

import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server;

  constructor(
    private chatService: ChatService, //  private readonly chatAdminRepo: ChatAdminRepository,
  ) {}

  adminId: string = '';

  async handleConnection(event: any) {
    let chat = new Chat();
    chat.userId = event.id;
    chat.messages = [];
    this.chatService.create(chat);
    console.log('user connected', event.handshake.query.user_role);
    const userRole = event.handshake.query.user_role;

    if (userRole == 'Admin') {
      this.adminId = event.id;
      // let res = await this.chatAdminRepo.create({ adminSocketId: event.id });
    }

    console.log('response', this.adminId);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    let message = new Message();
    let userId: string = '';

    if (payload.mode == 'Client') {
      message.message = payload.message;
      message.senderId = client.id;
      message.receiverUserId = 'Admin';
      userId = client.id;
    } else if (payload.mode == 'Admin') {
      message.message = payload.message;
      message.senderId = payload.mode;
      message.receiverUserId = payload.receiverUserId;
      userId = payload.receiverUserId;
    }

    this.chatService.update(message, userId);
    console.log(message);

    if (payload.mode == 'Client') {
      this.server.to(this.adminId).emit('message', message);
    } else if (payload.mode == 'Admin') {
      this.server.to(payload.receiverUserId).emit('message', message);
    }

    return 'Hello world!';
  }
}
