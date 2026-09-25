import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class PaymentItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}