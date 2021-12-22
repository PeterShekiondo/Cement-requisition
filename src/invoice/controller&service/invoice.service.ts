import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InvoiceDto } from "../dto/create-invoice.dto";
import { InvoiceEntity } from "../entity&repository/invoice.entity";
import { InvoiceRepository } from "../entity&repository/invoice.repository";

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceRepository)
    private invoiceRepository: InvoiceRepository
  ) {}

  createInvoice(createInvoiceDto: InvoiceDto.CreateInvoiceDto) {
    this.invoiceRepository.createInvoice(createInvoiceDto);
  }

  async updateInvoice(curentInvoiceNumber:string, createInvoiceDto: InvoiceDto.CreateInvoiceDto): Promise<InvoiceEntity[]> {
        const { bankName, amount, invoiceNumber, detail, currency } =createInvoiceDto;
        const invoices = await this.invoiceRepository.find({
        where: { invoiceNumber: curentInvoiceNumber },
        });
        if (invoices.length== 0) {
            throw new BadRequestException(`Forbidden: Invoice of ID ${curentInvoiceNumber} does not exist`);
        }
        for (const key in invoices) {
            const invoice = invoices[key];
            invoice.bankName = bankName;
            invoice.amount = amount;
            invoice.invoiceNumber = invoiceNumber;
            invoice.detail = detail;
            invoice.currency = currency;
            await invoice.save();
        }
        return invoices
  }

  async getInvoiceByParam(searchKey: string): Promise<InvoiceEntity[]> {
    try {
      const invoice = await this.invoiceRepository.find({
        where: [{ invoiceNumber: searchKey }, { bankName: searchKey }],
      });
      return invoice;
    } catch (error) {
      throw new Error("Opps...!, can not complete request, try again later");
    }
  }

  async getAllInvoice(): Promise<InvoiceEntity[]> {
    const invoices = await this.invoiceRepository.find();
    return invoices;
  }
}
