import { IQueryHandler } from '@nestjs/cqrs';
import { GetValuesQuery } from './get-latest-values.query';
import LuminosityRepository from '../../repositories/luminosity.repository';
import { Luminosity } from '../../model/luminosity.entity';
export declare class GetValuesHandler implements IQueryHandler<GetValuesQuery> {
    private repository;
    constructor(repository: LuminosityRepository);
    execute(query: GetValuesQuery): Promise<Luminosity[]>;
}
