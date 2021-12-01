import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTenderStateDto } from '../dto/createTender-status.dto';
import { TenderStatesService } from './tender-states.service';

@UseGuards(AuthGuard()) // guarding every request fo jwt-strategy
@UsePipes(ValidationPipe)
@Controller('tender_states')
export class TenderStatesController {
    constructor(
        private tenderStatesService : TenderStatesService
    ){}

    @Post('/create')
    createTenderState(@Body() CreateTenderStateDto:CreateTenderStateDto):Promise<void>{
        return this.tenderStatesService.createTenderState(CreateTenderStateDto)
    }
}
