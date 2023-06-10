import { Module } from '@nestjs/common';
import { LuminosityController } from '../controller/luminosity.controller';
import { LuminosityService } from '../domains/luminosity/luminosity.service';
import { RepositoriesModule } from '../domains/luminosity/repositories';
import { CqrsModule } from '@nestjs/cqrs';
import { GetValuesHandler } from '../domains/luminosity/services/getLatestValues/get-latest-values.handler';
import { GetHighestSubsetValuesHandler } from '../domains/luminosity/services/getHighestSubsetValues/get-highest-subset-values.handler';
import { InsertValueHandler } from '../domains/luminosity/services/insertValue/insert-value.handler';
import { EventStoreHandler } from '../eventStore/event-store.handler';
import { EventStore } from '../eventStore';

@Module({
  imports: [RepositoriesModule, CqrsModule],
  controllers: [LuminosityController],
  providers: [
    LuminosityService,
    GetValuesHandler,
    GetHighestSubsetValuesHandler,
    InsertValueHandler,
    EventStoreHandler,
    EventStore,
  ],
})
export class LuminosityModule {}
