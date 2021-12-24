import { IsNotEmpty, Matches } from 'class-validator';

export namespace InvoiceDto{

    export class CreateInvoiceDto {
      id: string;

      @IsNotEmpty()
      bankName: string;
    
      @IsNotEmpty() 
      amount: number;
    
      @IsNotEmpty()
      //^[A-Za-z0-9_-]*$
      @Matches(/(?:^[A-Za-z0-9_-]*$)/, {
        message: 'Invoice number may only contain letter, number, underscore or hyphen',
      })
      invoiceNumber: string;
    
      @IsNotEmpty() 
      detail: string;

      @IsNotEmpty() 
      currency: string;
    
    }

    export class DeleteInvoice {

      id: string;

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