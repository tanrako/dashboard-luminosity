import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetValuesQuery } from './get-latest-values.query';
import LuminosityRepository from '../../repositories/luminosity.repository';
import { Luminosity } from '../../model/luminosity.entity';

@QueryHandler(GetValuesQuery)
export class GetValuesHandler implements IQueryHandler<GetValuesQuery> {
  constructor(private repository: LuminosityRepository) {}

  async execute(query: GetValuesQuery): Promise<Luminosity[]> {
    const { order, direction, limit } = query;
    return this.repository.getValues(order, direction, limit);
  }
}
