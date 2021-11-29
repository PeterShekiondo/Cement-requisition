import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTruckDto } from '../dto/createTruck.dto';
import { TruckService } from './truck.service';

@Controller('trucks')
@UseGuards(AuthGuard()) // guarding every request fo jwt-strategy
@UsePipes(ValidationPipe)
export class TruckController {
    constructor(
        private truckService : TruckService
    ){}

    @Post('/create')
    createTruck(@Body() createTruckDto:CreateTruckDto): Promise<void>{
        return this.truckService.createTruck(createTruckDto)
    }
}
