"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStore = void 0;
class EventStore {
    constructor() {
        this.events = [];
    }
    async saveEvent(event) {
        this.events.push(event);
    }
    async getEvents() {
        return this.events;
    }
}
exports.EventStore = EventStore;
//# sourceMappingURL=index.js.map