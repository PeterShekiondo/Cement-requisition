import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TenderStatesController } from './controller&service/tender-states.controller';
import { TenderStatesService } from './controller&service/tender-states.service';
import { TenderStateRepository } from './entity&repository/tander-state.repository';

@Module({
  imports:[TypeOrmModule.forFeature([TenderStateRepository]), AuthModule],
  controllers: [TenderStatesController],
  providers: [TenderStatesService]
})
export class TenderStatesModule {}
