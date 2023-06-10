"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetValuesQuery = void 0;
class GetValuesQuery {
    constructor(order = 'timestamp', direction = 'DESC', limit = 10) {
        this.order = order;
        this.direction = direction;
        this.limit = limit;
    }
}
exports.GetValuesQuery = GetValuesQuery;
//# sourceMappingURL=get-latest-values.query.js.map