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

  @IsString()
  boughtUserId?: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  imageUrl: number;
}
