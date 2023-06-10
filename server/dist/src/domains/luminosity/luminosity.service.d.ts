import { CommandBus, QueryBus } from '@nestjs/cqrs';
export declare class LuminosityService {
    private queryBus;
    private commandBus;
    constructor(queryBus: QueryBus, commandBus: CommandBus);
    getLuminosityValues(order?: string, direction?: 'ASC' | 'DESC', limit?: number): Promise<any>;
    getHighestSubsetValues(): Promise<any>;
    insertRandomValue(): Promise<void>;
    private generateRandomValue;
}
