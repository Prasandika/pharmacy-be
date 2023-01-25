import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator/types/decorator/decorators';

export class ProductDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  boughtUserId?: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  imageUrl: number;
}
