export declare class EventStore {
    private events;
    saveEvent(event: any): Promise<void>;
    getEvents(): Promise<any[]>;
}
