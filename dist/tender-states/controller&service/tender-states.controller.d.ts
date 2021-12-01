import { CreateTenderStateDto } from '../dto/createTender-status.dto';
import { TenderStatesService } from './tender-states.service';
export declare class TenderStatesController {
    private tenderStatesService;
    constructor(tenderStatesService: TenderStatesService);
    createTenderState(CreateTenderStateDto: CreateTenderStateDto): Promise<void>;
}
