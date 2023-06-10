import { IQueryHandler } from '@nestjs/cqrs';
import LuminosityRepository from '../../repositories/luminosity.repository';
import { Luminosity } from '../../model/luminosity.entity';
import { GetHighestSubsetValuesQuery } from './get-highest-subset-values.query';
export declare class GetHighestSubsetValuesHandler implements IQueryHandler<GetHighestSubsetValuesQuery> {
    private repository;
    constructor(repository: LuminosityRepository);
    execute(): Promise<Luminosity[]>;
}
