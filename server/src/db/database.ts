import * as sqlite3 from 'sqlite3';

class Database {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database('src/db/database.db');
  }

  run<T>(query: string, params = []): Promise<T> {
    return new Promise((resolve, reject) => {
      this.db.run(query, params, function (err, res: T) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  all<T>(query: string, params = []): Promise<T> {
    return new Promise((resolve, reject) => {
      this.db.all(query, params, function (err, res: T) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}

export default Database;
