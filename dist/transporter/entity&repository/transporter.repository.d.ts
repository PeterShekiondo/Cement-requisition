import { Repository } from "typeorm";
import { TransporterDto } from "../dto/create-transporter.dto";
import { TransporterEntity } from "./transporter.entity";
export declare class TransporterRepository extends Repository<TransporterEntity> {
    createTransporter(createTransporterDto: TransporterDto.CreateTransporterDto): Promise<void>;
}
