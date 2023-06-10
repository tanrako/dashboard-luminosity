declare class Database {
    private db;
    constructor();
    run<T>(query: string, params?: any[]): Promise<T>;
    all<T>(query: string, params?: any[]): Promise<T>;
}
export default Database;
