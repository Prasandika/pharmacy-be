import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/api/products/interfaces/product.interface';

@Injectable()
export class ProductsRepositoryService {
  constructor(
    @InjectModel('Products')
    private readonly productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async create(item: Product): Promise<Product> {
    const newItem = new this.productModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, item, {
      new: true,
    });
  }

  async buyProduct(productId: string, userId: string): Promise<Product> {
    console.log(productId, userId);

    const boughtProduct = await this.productModel.findOne({
      _id: productId,
      boughtUserId: userId,
    });

    console.log(boughtProduct);

    if (boughtProduct) {
      throw new ForbiddenException('Product already bought');
    }

    await this.productModel.findOneAndUpdate(
      { _id: productId },
      { boughtUserId: userId },
    );
    return await this.findOne(productId);
  }

  async getProductsByBoughtId(userId: string): Promise<Product[]> {
    return await this.productModel.find({ boughtUserId: userId });
  }
}
