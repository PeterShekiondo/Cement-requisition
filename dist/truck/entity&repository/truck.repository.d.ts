import { Repository } from "typeorm";
import { CreateTruckDto } from "../dto/createTruck.dto";
import { TruckEntity } from "./truck.entity";
export declare class TruckRepository extends Repository<TruckEntity> {
    createTruck(createTruckDto: CreateTruckDto): Promise<void>;
}
