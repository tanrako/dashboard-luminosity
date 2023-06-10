import { Inject, Injectable } from '@nestjs/common';
import { Luminosity } from '../model/luminosity.entity';
import Database from '../../../db/database';

abstract class Repository {
  abstract getValues(): Promise<Luminosity[]>;
  abstract insertValue(value: number, timestamp: Date): Promise<void>;
}

@Injectable()
export default class LuminosityRepository implements Repository {
  constructor(@Inject('Database') private database: Database) {}

  async getValues(
    order?: string,
    direction?: 'ASC' | 'DESC',
    limit?: number,
  ): Promise<Luminosity[]> {
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

  async getHighestSubsetValues(): Promise<Luminosity[]> {
    const query = 'SELECT * FROM luminosity ORDER BY timestamp DESC LIMIT 10';
    const allValues = await this.database.all<Luminosity[]>(query);

    return this.findMaxConsecutiveSubset(allValues);
  }

  async insertValue(value: number, timestamp: Date): Promise<void> {
    const query = `INSERT INTO luminosity (value, timestamp)
    VALUES (?, ?)`;

    await this.database.run(query, [value, timestamp]);
  }

  private findMaxConsecutiveSubset(
    luminosityValues: Luminosity[],
  ): Luminosity[] {
    let maxSubset: Luminosity[] = [];
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
}
