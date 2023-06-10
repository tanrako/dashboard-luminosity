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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_1 = require("../../../db/database");
class Repository {
}
let LuminosityRepository = class LuminosityRepository {
    constructor(database) {
        this.database = database;
    }
    async getValues(order, direction, limit) {
        let query = 'SELECT * FROM luminosity';
        if (order) {
            query += ` ORDER BY ${order}`;
            query += direction === 'DESC' ? ' DESC' : ' ASC';
        }
        if (limit) {
            query += ` LIMIT ${limit}`;
        }
        return this.database.all(query);
    }
    async getHighestSubsetValues() {
        const query = 'SELECT * FROM luminosity ORDER BY timestamp DESC LIMIT 10';
        const allValues = await this.database.all(query);
        return this.findMaxConsecutiveSubset(allValues);
    }
    async insertValue(value, timestamp) {
        const query = `INSERT INTO luminosity (value, timestamp)
    VALUES (?, ?)`;
        await this.database.run(query, [value, timestamp]);
    }
    findMaxConsecutiveSubset(luminosityValues) {
        let maxSubset = [];
        let maxSum = 0;
        for (let i = 0; i < luminosityValues.length - 4; i++) {
            const subset = luminosityValues.slice(i, i + 5);
            const sum = subset.reduce((total, value) => total + value.value, 0);
            if (sum > maxSum) {
                maxSum = sum;
                maxSubset = subset;
            }
        }
        return maxSubset;
    }
};
LuminosityRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('Database')),
    __metadata("design:paramtypes", [database_1.default])
], LuminosityRepository);
exports.default = LuminosityRepository;
//# sourceMappingURL=luminosity.repository.js.map