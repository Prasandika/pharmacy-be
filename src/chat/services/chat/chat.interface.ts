export class Message {
  senderId: string;
  message: string;
  orderId: number;
  receiverUserId: string;
}

export class Chat {
  userId: string;
  messages: Message[];
}

export class ChatAdmin {
  adminSocketId: string;
}
