"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
const sqlite = sqlite3_1.default.verbose();
const db = new sqlite.Database('src/db/database.db');
db.run(`CREATE TABLE IF NOT EXISTS luminosity (
value REAL,
timestamp DATETIME DEFAULT (DATETIME(CURRENT_TIMESTAMP, 'localtime'))
)`);
function generateRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}
setInterval(() => {
    const randomNumber = generateRandomNumber(0.01, 19.99);
    db.run('INSERT INTO luminosity (value) VALUES (?)', randomNumber, function (err) {
        if (err) {
            console.error('Error inserting value:', err);
        }
        else {
            console.log(`Inserted ${randomNumber} into the database.`);
        }
    });
}, 2000);
//# sourceMappingURL=index.js.map