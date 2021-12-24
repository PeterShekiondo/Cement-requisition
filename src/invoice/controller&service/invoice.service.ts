import { BadRequestException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
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

  createInvoice(createInvoiceDto: InvoiceDto.CreateInvoiceDto):Promise<void> {
    return this.invoiceRepository.createInvoice(createInvoiceDto);
  }

  async updateInvoice(curentInvoiceNumber:string, createInvoiceDto: InvoiceDto.CreateInvoiceDto): Promise<InvoiceEntity[]> {
        const { bankName, amount, invoiceNumber, detail, currency } =createInvoiceDto;
        const invoices = await this.invoiceRepository.find({
        where: { invoiceNumber: curentInvoiceNumber },
        });
        if (invoices.length== 0) {
            throw new NotFoundException(`Forbidden: Invoice of ID ${curentInvoiceNumber} does not exist`);
        }
        try {
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
        } catch (error) {
          throw new HttpException('can not complete request. please try agin later', 404)
          // TODO add error log here
        }
  }

  async getInvoiceByParam(searchKey: string): Promise<InvoiceEntity[]> {
    try {
      const invoice = await this.invoiceRepository.find({
        where: [{ invoiceNumber: searchKey }, { bankName: searchKey }],
      });
      return invoice;
    } catch (error) {
      throw new Error("can not complete request, try again later");
    }
  }

  async getAllInvoice(): Promise<InvoiceEntity[]> {
    const invoices = await this.invoiceRepository.find();
    return invoices;
  }

  async deleteInvoice(createInvoiceDto: InvoiceDto.DeleteInvoice):Promise<any>{
    const {id, invoiceNumber} = createInvoiceDto
    try {
      const deletedInvoice = await this.invoiceRepository.delete(id)
      if (deletedInvoice.affected == 0) {          
        throw new HttpException('A requested Invoice to be deleted can not be found', 400) 
      } 
      const response = `Invoice with Number ${invoiceNumber} has been deleted successfully`
      return response
    } catch (error) {
      throw new BadRequestException(error);    
    }
  }
}
