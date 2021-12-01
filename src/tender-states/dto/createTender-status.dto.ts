import { IsNotEmpty } from 'class-validator';
export class CreateTenderStateDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  color: string;
}