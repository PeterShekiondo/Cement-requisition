import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { InvoiceDto } from "../dto/create-invoice.dto";
import { InvoiceEntity } from "./invoice.entity";

@EntityRepository(InvoiceEntity)
export class InvoiceRepository extends Repository<InvoiceEntity>{

    async createInvoice(createInvoiceDto: InvoiceDto.CreateInvoiceDto):Promise<void> {
        const {
            bankName,
            amount,
            invoiceNumber,
            detail,
            currency
        } = createInvoiceDto
        const invoice = new InvoiceEntity()
        invoice.bankName = bankName
        invoice.amount = amount
        invoice.invoiceNumber = invoiceNumber
        invoice.detail = detail
        invoice.currency = currency
        try {
            await invoice.save()
        } catch (error) {
            if (error.code == 23505) {
                throw new ConflictException(`Invoice with number ${invoiceNumber} already exist`);
            } 
                throw new InternalServerErrorException('');
            
        } 

    }
}