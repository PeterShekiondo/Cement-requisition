import { Controller, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('trucks')
@UseGuards(AuthGuard()) // guarding every request fo jwt-strategy
@UsePipes(ValidationPipe)
export class TruckController {}
