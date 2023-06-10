import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import LuminosityRepository from '../../repositories/luminosity.repository';
import { Luminosity } from '../../model/luminosity.entity';
import { GetHighestSubsetValuesQuery } from './get-highest-subset-values.query';

@QueryHandler(GetHighestSubsetValuesQuery)
export class GetHighestSubsetValuesHandler
  implements IQueryHandler<GetHighestSubsetValuesQuery>
{
  constructor(private repository: LuminosityRepository) {}

  async execute(): Promise<Luminosity[]> {
    return this.repository.getHighestSubsetValues();
  }
}
