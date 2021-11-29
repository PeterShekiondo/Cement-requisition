import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TruckService } from './controller&service/truck.service';
import { TruckController } from './controller&service/truck.controller';
import { TruckRepository } from './entity&repository/truck.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([TruckRepository]), AuthModule],
  providers: [TruckService],
  controllers: [TruckController]
})
export class TrucksModule {}
