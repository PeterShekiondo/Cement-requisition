import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTruckDto } from '../dto/createTruck.dto';
import { TruckRepository } from '../entity&repository/truck.repository';

@Injectable()
export class TruckService {
    constructor(
        @InjectRepository(TruckRepository)
        private truckRepository : TruckRepository
    ){}
    
    createTruck (createTruckDto: CreateTruckDto): Promise<void>{
        return this.truckRepository.createTruck(createTruckDto)
    }
}
