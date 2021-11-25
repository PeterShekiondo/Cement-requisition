import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransporterDto } from '../dto/create-transporter.dto';
import { TransporterRepository } from '../entity&repository/transporter.repository';

@Injectable()
export class TransporterService {
    constructor(
        @InjectRepository(TransporterRepository)
        private transporterRepository: TransporterRepository
    ){}

    createTransporter (createTransporterDto:CreateTransporterDto): Promise<void> {
       return this.transporterRepository.createTransporter(createTransporterDto)
    }
}
