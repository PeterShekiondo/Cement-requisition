import { Module } from '@nestjs/common';
import { TenderStatesController } from './controller&service/tender-states.controller';
import { TenderStatesService } from './controller&service/tender-states.service';

@Module({
  controllers: [TenderStatesController],
  providers: [TenderStatesService]
})
export class TenderStatesModule {}
