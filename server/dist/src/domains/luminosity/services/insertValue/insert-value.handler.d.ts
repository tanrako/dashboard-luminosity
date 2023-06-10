import { EventBus, ICommandHandler } from '@nestjs/cqrs';
import { InsertValueCommand } from './insert-value.command';
import LuminosityRepository from '../../repositories/luminosity.repository';
export declare class InsertValueHandler implements ICommandHandler<InsertValueCommand> {
    private readonly repository;
    private readonly eventBus;
    constructor(repository: LuminosityRepository, eventBus: EventBus);
    execute(command: InsertValueCommand): Promise<void>;
}
