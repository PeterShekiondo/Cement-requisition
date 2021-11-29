import { CreateTruckDto } from '../dto/createTruck.dto';
import { TruckRepository } from '../entity&repository/truck.repository';
export declare class TruckService {
    private truckRepository;
    constructor(truckRepository: TruckRepository);
    createTruck(createTruckDto: CreateTruckDto): Promise<void>;
}
