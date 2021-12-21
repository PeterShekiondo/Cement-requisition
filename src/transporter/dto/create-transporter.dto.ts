import { IsNotEmpty } from 'class-validator';

export namespace TransporterDto {
  export class CreateTransporterDto {
    @IsNotEmpty()
    name: string;
  
    company: string;
  
    @IsNotEmpty() 
    driverLisence: string;
  
    @IsNotEmpty()
    phone: string;
  
  }

}
