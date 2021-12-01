import { CreateTenderStateDto } from '../dto/createTender-status.dto';
import { TenderStateRepository } from '../entity&repository/tander-state.repository';
export declare class TenderStatesService {
    private tenderStateRepository;
    constructor(tenderStateRepository: TenderStateRepository);
    createTenderState(createTenderStateDto: CreateTenderStateDto): Promise<void>;
}
