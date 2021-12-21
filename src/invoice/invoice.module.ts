import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { InvoicesController } from './controller&service/invoice.controller';
import { InvoiceService } from './controller&service/invoice.service';
import { InvoiceRepository } from './entity&repository/invoice.repository';

@Module({
    imports: [TypeOrmModule.forFeature([InvoiceRepository]), AuthModule],
    controllers: [InvoicesController],
    providers: [InvoiceService]
})
export class InvoiceModule {}
