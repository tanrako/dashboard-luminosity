export class EventStore {
  private events: any[] = [];

  async saveEvent(event: any): Promise<void> {
    this.events.push(event);
  }

  async getEvents(): Promise<any[]> {
    return this.events;
  }
}
