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
exports.LuminosityService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const get_latest_values_query_1 = require("./services/getLatestValues/get-latest-values.query");
const insert_value_command_1 = require("./services/insertValue/insert-value.command");
const get_highest_subset_values_query_1 = require("./services/getHighestSubsetValues/get-highest-subset-values.query");
let LuminosityService = exports.LuminosityService = class LuminosityService {
    constructor(queryBus, commandBus) {
        this.queryBus = queryBus;
        this.commandBus = commandBus;
    }
    async getLuminosityValues(order, direction, limit) {
        const query = new get_latest_values_query_1.GetValuesQuery(order, direction, limit);
        return this.queryBus.execute(query);
    }
    async getHighestSubsetValues() {
        const query = new get_highest_subset_values_query_1.GetHighestSubsetValuesQuery();
        return this.queryBus.execute(query);
    }
    async insertRandomValue() {
        const { value, timestamp } = this.generateRandomValue(0.01, 19.99);
        const command = new insert_value_command_1.InsertValueCommand(value, timestamp);
        await this.commandBus.execute(command);
    }
    generateRandomValue(min, max) {
        const randomNumber = parseFloat((Math.random() * (max - min) + min).toFixed(2));
        const ts = new Date();
        return { value: randomNumber, timestamp: ts };
    }
};
exports.LuminosityService = LuminosityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.QueryBus, cqrs_1.CommandBus])
], LuminosityService);
//# sourceMappingURL=luminosity.service.js.map