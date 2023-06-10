export class GetValuesQuery {
  constructor(
    public readonly order: string = 'timestamp',
    public readonly direction: 'ASC' | 'DESC' = 'DESC',
    public readonly limit: number = 10,
  ) {}
}
