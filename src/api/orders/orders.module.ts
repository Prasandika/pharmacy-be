import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersRepositoryService } from 'src/db/repository/orders.repository/orders.repository.service';
import OrdersSchema from 'src/db/schemas/orders.schema';
import { OrdersController } from './controllers/orders/orders.controller';
import { OrdersService } from './services/orders/orders.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Orders', schema: OrdersSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepositoryService],
})
export class OrdersModule {}
