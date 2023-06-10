import { IEventHandler } from '@nestjs/cqrs';
import { EventStore } from '.';
export declare class EventStoreHandler implements IEventHandler<any> {
    private readonly eventStore;
    constructor(eventStore: EventStore);
    handle(event: any): Promise<void>;
}
