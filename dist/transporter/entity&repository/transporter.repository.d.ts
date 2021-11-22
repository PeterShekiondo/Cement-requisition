import { Repository } from "typeorm";
import { CreateTransporterDto } from "../dto/create-transporter.dto";
import { Transporter } from "./transporter.entity";
export declare class TransporterRepository extends Repository<Transporter> {
    createTransporter(createTransporterDto: CreateTransporterDto): Promise<void>;
}
