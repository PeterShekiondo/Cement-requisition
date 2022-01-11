import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTruckDto } from '../dto/createTruck.dto';
import { TruckEntity } from '../entity&repository/truck.entity';
import { TruckRepository } from '../entity&repository/truck.repository';

@Injectable()
export class TruckService {
    constructor(
        @InjectRepository(TruckRepository)
        private truckRepository : TruckRepository
    ){}
    
    createTruck(createTruckDto: CreateTruckDto): Promise<void>{
        return this.truckRepository.createTruck(createTruckDto)
    }

    async getAllTruck(): Promise<TruckEntity>{
        const trucks = await this.truckRepository.findOne()
        return trucks
    }

    /**  
     * FINISH THIS BLOCK
     * */
    async getTruckbyTruckNumber(truckNumber: number):Promise<TruckEntity[]>{
        try {
            const trucks = await this.truckRepository.find({
                where: {truckNumber: truckNumber}
            })
            if (trucks.length == 0) {
                throw new NotFoundException(`Forbidden: Truck with number ${truckNumber} does not exist`);            
            }
            return trucks
        } catch (error) {
            console.log(error);           
            throw new NotFoundException(`Forbidden: Truck with number ${truckNumber} does not exist`);
        }


    }
}
