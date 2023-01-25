import { OrdersModule } from './../orders/orders.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsRepositoryService } from 'src/db/repository/products.repository/products.repository.service';
import ProductsSchema from 'src/db/schemas/products.schema';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductsSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepositoryService],
  exports: [ProductsService],
})
export class ProductsModule {}
