export class ValueInsertedEvent {
  constructor(public readonly value: number, public readonly timestamp: Date) {}
}
