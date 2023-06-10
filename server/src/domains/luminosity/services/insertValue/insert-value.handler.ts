import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { InsertValueCommand } from './insert-value.command';
import LuminosityRepository from '../../repositories/luminosity.repository';
import { ValueInsertedEvent } from '../../events/value-inserted.event';

@CommandHandler(InsertValueCommand)
export class InsertValueHandler implements ICommandHandler<InsertValueCommand> {
  constructor(
    private readonly repository: LuminosityRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: InsertValueCommand): Promise<void> {
    const { value, timestamp } = command;

    await this.repository.insertValue(value, timestamp);

    const event = new ValueInsertedEvent(value, timestamp);
    this.eventBus.publish(event);
  }
}
