import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTransporterDto } from './dto/create-transporter.dto';
import { TransporterService } from './transporter.service';

@Controller('transporter')
@UseGuards(AuthGuard()) // guarding every request fo jwt-strategy
@UsePipes(ValidationPipe)
export class TransporterController {
    constructor(private transporterService: TransporterService){}
    
    @Post('/create')
    createTransporter(@Body() createTransporterDto:CreateTransporterDto): Promise<void> {
        return this.transporterService.createTransporter(createTransporterDto)
    }
}
