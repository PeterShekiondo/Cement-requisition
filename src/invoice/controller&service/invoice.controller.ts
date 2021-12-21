import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvoiceDto } from '../dto/create-invoice.dto';
import { InvoiceService } from './invoice.service';

@UseGuards(AuthGuard()) // guarding every request fo jwt-strategy
@UsePipes(ValidationPipe)

@Controller('invoice')
export class InvoicesController {
    constructor(private invoiceService: InvoiceService){}

    @Post('/create')
    createInvoice(@Body() createInvoiceDto: InvoiceDto.CreateInvoiceDto): Promise<void>{
        return this.invoiceService.createInvoice(createInvoiceDto)        
    }
}
