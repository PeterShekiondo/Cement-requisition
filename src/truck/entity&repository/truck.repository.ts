import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTruckDto } from "../dto/createTruck.dto";
import { TruckEntity } from "./truck.entity";

@EntityRepository(TruckEntity)
export class TruckRepository extends Repository<TruckEntity>{

    async createTransporter(createTruckDto: CreateTruckDto):Promise<void>{
        const { 
            brand, 
            truckNumber,
            capacity,
            numberOfTrailers
        } = createTruckDto
        
        const truck = new TruckEntity()
        truck.brand = brand
        truck.truckNumber = truckNumber
        truck.capacity = capacity
        truck.numberOfTrailers = numberOfTrailers
        try {
            await truck.save()
        } catch (error) {
            if (error.code == 23505) {
                throw new ConflictException(`Truck with truck number ${truckNumber} already exist`);
              } else {
                throw new InternalServerErrorException('91123-f8r7y8erhsi 0n turck service');
              }
        }

    }

}

