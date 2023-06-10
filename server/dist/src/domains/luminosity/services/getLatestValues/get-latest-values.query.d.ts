export declare class GetValuesQuery {
    readonly order: string;
    readonly direction: 'ASC' | 'DESC';
    readonly limit: number;
    constructor(order?: string, direction?: 'ASC' | 'DESC', limit?: number);
}
