import { IsNotEmpty } from 'class-validator';

export namespace InvoiceDto{

    export class CreateInvoiceDto {
      @IsNotEmpty()
      bankName: string;
    
      @IsNotEmpty() 
      amount: number;
    
      @IsNotEmpty()
      invoiceNumber: string;
    
      @IsNotEmpty() 
      detail: string;

      @IsNotEmpty() 
      currency: string;
    
    }
}