import { Module } from '@nestjs/common';
import LuminosityRepository from './luminosity.repository';
import Database from '../../../db/database';

@Module({
  providers: [
    LuminosityRepository,
    {
      provide: 'Database',
      useValue: new Database(),
    },
  ],
  exports: [LuminosityRepository],
})
export class RepositoriesModule {}
