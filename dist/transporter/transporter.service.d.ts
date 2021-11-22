import { CreateTransporterDto } from './dto/create-transporter.dto';
import { TransporterRepository } from './entity&repository/transporter.repository';
export declare class TransporterService {
    private transporterRepository;
    constructor(transporterRepository: TransporterRepository);
    createTransporter(createTransporterDto: CreateTransporterDto): Promise<void>;
}
