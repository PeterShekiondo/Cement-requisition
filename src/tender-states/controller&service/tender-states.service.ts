import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTenderStateDto } from '../dto/createTender-status.dto';
import { TenderStateRepository } from '../entity&repository/tander-state.repository';

@Injectable()
export class TenderStatesService {
    constructor(
        @InjectRepository(TenderStateRepository)
        private tenderStateRepository : TenderStateRepository
    ){}

    createTenderState (createTenderStateDto:CreateTenderStateDto):Promise<void>{
        return this.tenderStateRepository.createTenderState(createTenderStateDto)
    }
}
