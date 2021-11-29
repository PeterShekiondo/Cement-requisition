import { CreateTruckDto } from '../dto/createTruck.dto';
import { TruckService } from './truck.service';
export declare class TruckController {
    private truckService;
    constructor(truckService: TruckService);
    createTruck(createTruckDto: CreateTruckDto): Promise<void>;
}
