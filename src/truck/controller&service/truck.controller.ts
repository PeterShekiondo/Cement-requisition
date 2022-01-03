import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTruckDto } from '../dto/createTruck.dto';
import { TruckEntity } from '../entity&repository/truck.entity';
import { TruckService } from './truck.service';

@UseGuards(AuthGuard()) // guarding every request fo jwt-strategy
@UsePipes(ValidationPipe)
@Controller('trucks')
export class TruckController {
    constructor(
        private truckService : TruckService
    ){}

    @Post('/create')
    createTruck(@Body() createTruckDto:CreateTruckDto): Promise<void>{
        return this.truckService.createTruck(createTruckDto)
    }

    @Get('/getAll')
    getAllTruck():Promise<TruckEntity>{
        return this.truckService.getAllTruck()
    }
}
