"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertValueHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const insert_value_command_1 = require("./insert-value.command");
const luminosity_repository_1 = require("../../repositories/luminosity.repository");
const value_inserted_event_1 = require("../../events/value-inserted.event");
let InsertValueHandler = exports.InsertValueHandler = class InsertValueHandler {
    constructor(repository, eventBus) {
        this.repository = repository;
        this.eventBus = eventBus;
    }
    async execute(command) {
        const { value, timestamp } = command;
        await this.repository.insertValue(value, timestamp);
        const event = new value_inserted_event_1.ValueInsertedEvent(value, timestamp);
        this.eventBus.publish(event);
    }
};
exports.InsertValueHandler = InsertValueHandler = __decorate([
    (0, cqrs_1.CommandHandler)(insert_value_command_1.InsertValueCommand),
    __metadata("design:paramtypes", [luminosity_repository_1.default,
        cqrs_1.EventBus])
], InsertValueHandler);
//# sourceMappingURL=insert-value.handler.js.map