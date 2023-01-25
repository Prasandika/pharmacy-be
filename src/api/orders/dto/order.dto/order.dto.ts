import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class OrderDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
