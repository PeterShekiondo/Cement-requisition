import { Repository } from "typeorm";
import { CreateTransporterDto } from "../dto/create-transporter.dto";
import { TransporterEntity } from "./transporter.entity";
export declare class TransporterRepository extends Repository<TransporterEntity> {
    createTransporter(createTransporterDto: CreateTransporterDto): Promise<void>;
}
