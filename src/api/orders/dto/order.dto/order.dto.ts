import { IsNotEmpty, IsString } from 'class-validator';

export class OrderDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  cartId: string;
}
