"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require("sqlite3");
class Database {
    constructor() {
        this.db = new sqlite3.Database('src/db/database.db');
    }
    run(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(query, params, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
    all(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(query, params, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map