import { Luminosity } from '../model/luminosity.entity';
import Database from '../../../db/database';
declare abstract class Repository {
    abstract getValues(): Promise<Luminosity[]>;
    abstract insertValue(value: number, timestamp: Date): Promise<void>;
}
export default class LuminosityRepository implements Repository {
    private database;
    constructor(database: Database);
    getValues(order?: string, direction?: 'ASC' | 'DESC', limit?: number): Promise<Luminosity[]>;
    getHighestSubsetValues(): Promise<Luminosity[]>;
    insertValue(value: number, timestamp: Date): Promise<void>;
    private findMaxConsecutiveSubset;
}
export {};
