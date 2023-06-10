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
exports.LuminosityController = void 0;
const common_1 = require("@nestjs/common");
const luminosity_service_1 = require("../domains/luminosity/luminosity.service");
let LuminosityController = exports.LuminosityController = class LuminosityController {
    constructor(luminosityService) {
        this.luminosityService = luminosityService;
    }
    async getLatestValues() {
        return this.luminosityService.getLuminosityValues('timestamp', 'DESC', 10);
    }
    async getHighestSubsetValues() {
        return this.luminosityService.getHighestSubsetValues();
    }
    async insertRandomValue() {
        return this.luminosityService.insertRandomValue();
    }
};
__decorate([
    (0, common_1.Get)('latest-values'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LuminosityController.prototype, "getLatestValues", null);
__decorate([
    (0, common_1.Get)('highest-subset-values'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LuminosityController.prototype, "getHighestSubsetValues", null);
__decorate([
    (0, common_1.Post)('insert-random-value'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LuminosityController.prototype, "insertRandomValue", null);
exports.LuminosityController = LuminosityController = __decorate([
    (0, common_1.Controller)('luminosity'),
    __metadata("design:paramtypes", [luminosity_service_1.LuminosityService])
], LuminosityController);
//# sourceMappingURL=luminosity.controller.js.map