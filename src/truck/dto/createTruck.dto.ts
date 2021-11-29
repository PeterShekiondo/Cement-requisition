import { IsNotEmpty } from 'class-validator';
export class CreateTruckDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  truckNumber: string;
  
  @IsNotEmpty()
  capacity: string;

  @IsNotEmpty()
  numberOfTrailers: string;
}
