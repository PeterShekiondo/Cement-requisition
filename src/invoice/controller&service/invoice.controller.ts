import { Body, Controller, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvoiceDto } from '../dto/create-invoice.dto';
import { InvoiceEntity } from '../entity&repository/invoice.entity';
import { InvoiceService } from './invoice.service';

@UseGuards(AuthGuard()) // guarding every request fo jwt-strategy
@UsePipes(ValidationPipe)

@Controller('invoice')
export class InvoicesController {
    constructor(private invoiceService: InvoiceService){}

    @Get('/getAll')
    getAllInvoice():Promise<InvoiceEntity[]>{
        return this.invoiceService.getAllInvoice()
    }

    @Get('/:searchKey')
    getInvoiceByParam(@Param('searchKey') searchKey:string ):Promise<InvoiceEntity[]>{
        return this.invoiceService.getInvoiceByParam(searchKey)
    }

    @Post('/create')
    createInvoice(@Body() createInvoiceDto: InvoiceDto.CreateInvoiceDto){
        this.invoiceService.createInvoice(createInvoiceDto)        
    }

    @Patch('/upadte/:invoiceNumber')
    updateInvoice(
        @Param('invoiceNumber') invoiceNumber:string,
        @Body() createInvoiceDto: InvoiceDto.CreateInvoiceDto
        ):Promise<InvoiceEntity[]>{
        return this.invoiceService.updateInvoice(invoiceNumber, createInvoiceDto)        
    }
}
