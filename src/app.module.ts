import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TransporterModule } from './transporter/transporter.module';
import { TrucksModule } from './truck/truck.module';
import { TenderStatesModule } from './tender-states/tender-states.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(), // configer for global access of .env file
    TasksModule,
    AuthModule,
    TransporterModule,
    TrucksModule,
    TenderStatesModule,
    InvoiceModule,
  ],
})
export class AppModule {}
