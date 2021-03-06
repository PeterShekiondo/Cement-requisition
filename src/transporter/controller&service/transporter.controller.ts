import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransporterDto } from '../dto/create-transporter.dto';
import { TransporterService } from './transporter.service';

@UseGuards(AuthGuard()) 
@UsePipes(ValidationPipe)

@Controller('transporter')
export class TransporterController {
    constructor(private transporterService: TransporterService){}
    
    @Post('/create')
    createTransporter(@Body() createTransporterDto:TransporterDto.CreateTransporterDto): Promise<void> {
        return this.transporterService.createTransporter(createTransporterDto)
    }
}
