import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransporterDto } from '../dto/create-transporter.dto';
import { TransporterRepository } from '../entity&repository/transporter.repository';

@Injectable()
export class TransporterService {
    constructor(
        @InjectRepository(TransporterRepository)
        private transporterRepository: TransporterRepository
    ){}

    createTransporter (createTransporterDto: TransporterDto.CreateTransporterDto): Promise<void> {
       return this.transporterRepository.createTransporter(createTransporterDto)
    }
}
