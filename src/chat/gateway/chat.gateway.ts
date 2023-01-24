import { ChatService } from './../services/chat/chat.service';

import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Chat, Message } from '../services/chat/chat.interface';
import { UserRole } from 'src/enums/user-role.enum';
@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server;

  constructor(
    private chatService: ChatService, //  private readonly chatAdminRepo: ChatAdminRepository,
  ) {}

  adminId: string;

  async handleConnection(event: any) {
    const chat = new Chat();

    // assign chat details
    chat.userId = event.handshake?.query?.userId;
    chat.messages = [];
    chat.socketId = event.id;
    this.chatService.create(chat);

    console.log('user connected', event.handshake.query.user_role);
    const userRole = event.handshake.query.user_role;

    if (userRole == UserRole.Admin) {
      this.adminId = event.id;

      console.log('admin id is', this.adminId);
    }
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log('Payload', payload);
    const message = new Message();
    let userId = '';

    if (payload.mode == UserRole.Regular) {
      message.message = payload.message;
      message.senderId = payload.senderId;
      message.receiverUserId = this.adminId;
      userId = payload.senderId;
    } else if (payload.mode == UserRole.Admin) {
      message.message = payload.message;
      message.senderId = payload.mode;
      message.receiverUserId = payload.receiverUserId;
      userId = payload.receiverUserId;
    }

    this.chatService.update(message, userId);
    console.log('Message:', message);

    if (payload.mode == UserRole.Regular) {
      this.server.to(this.adminId).emit('message', message);
    } else if (payload.mode == UserRole.Admin) {
      this.chatService.getChatByUserId(payload.receiverUserId).then((chat) => {
        console.log('user socket id', chat.socketId, chat.userId);
        this.server.to(chat.socketId).emit('message', message);
      });
    }

    return 'Hello world!';
  }
}
