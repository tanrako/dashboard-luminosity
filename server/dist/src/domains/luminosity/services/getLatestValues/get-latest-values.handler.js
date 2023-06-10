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
exports.GetValuesHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_latest_values_query_1 = require("./get-latest-values.query");
const luminosity_repository_1 = require("../../repositories/luminosity.repository");
let GetValuesHandler = exports.GetValuesHandler = class GetValuesHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        const { order, direction, limit } = query;
        return this.repository.getValues(order, direction, limit);
    }
};
exports.GetValuesHandler = GetValuesHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_latest_values_query_1.GetValuesQuery),
    __metadata("design:paramtypes", [luminosity_repository_1.default])
], GetValuesHandler);
//# sourceMappingURL=get-latest-values.handler.js.map