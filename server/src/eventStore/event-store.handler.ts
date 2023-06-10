import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStore } from '.';

@EventsHandler()
export class EventStoreHandler implements IEventHandler<any> {
  constructor(private readonly eventStore: EventStore) {}

  async handle(event: any): Promise<void> {
    await this.eventStore.saveEvent(event);
  }
}
