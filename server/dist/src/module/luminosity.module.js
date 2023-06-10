"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuminosityModule = void 0;
const common_1 = require("@nestjs/common");
const luminosity_controller_1 = require("../controller/luminosity.controller");
const luminosity_service_1 = require("../domains/luminosity/luminosity.service");
const repositories_1 = require("../domains/luminosity/repositories");
const cqrs_1 = require("@nestjs/cqrs");
const get_latest_values_handler_1 = require("../domains/luminosity/services/getLatestValues/get-latest-values.handler");
const get_highest_subset_values_handler_1 = require("../domains/luminosity/services/getHighestSubsetValues/get-highest-subset-values.handler");
const insert_value_handler_1 = require("../domains/luminosity/services/insertValue/insert-value.handler");
const event_store_handler_1 = require("../eventStore/event-store.handler");
const eventStore_1 = require("../eventStore");
let LuminosityModule = exports.LuminosityModule = class LuminosityModule {
};
exports.LuminosityModule = LuminosityModule = __decorate([
    (0, common_1.Module)({
        imports: [repositories_1.RepositoriesModule, cqrs_1.CqrsModule],
        controllers: [luminosity_controller_1.LuminosityController],
        providers: [
            luminosity_service_1.LuminosityService,
            get_latest_values_handler_1.GetValuesHandler,
            get_highest_subset_values_handler_1.GetHighestSubsetValuesHandler,
            insert_value_handler_1.InsertValueHandler,
            event_store_handler_1.EventStoreHandler,
            eventStore_1.EventStore,
        ],
    })
], LuminosityModule);
//# sourceMappingURL=luminosity.module.js.map