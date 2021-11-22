import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TransporterController } from './transporter.controller';
import { TransporterRepository } from './entity&repository/transporter.repository';
import { TransporterService } from './transporter.service';

@Module({
  imports: [TypeOrmModule.forFeature([TransporterRepository]), AuthModule],
  controllers: [TransporterController],
  providers: [TransporterService]
})
export class TransporterModule {}
