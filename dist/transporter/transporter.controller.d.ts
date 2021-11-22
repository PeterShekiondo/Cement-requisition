import { CreateTransporterDto } from './dto/create-transporter.dto';
import { TransporterService } from './transporter.service';
export declare class TransporterController {
    private transporterService;
    constructor(transporterService: TransporterService);
    createTransporter(createTransporterDto: CreateTransporterDto): Promise<void>;
}
