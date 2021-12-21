import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceDto } from '../dto/create-invoice.dto';
import { InvoiceRepository } from '../entity&repository/invoice.repository';

@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(InvoiceRepository)
        private invoiceRepository: InvoiceRepository
    ){}

    createInvoice (createInvoiceDto: InvoiceDto.CreateInvoiceDto): Promise<void>{
        return this.invoiceRepository.createInvoice(createInvoiceDto)
    }

}
