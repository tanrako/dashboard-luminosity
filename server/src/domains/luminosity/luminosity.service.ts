import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetValuesQuery } from './services/getLatestValues/get-latest-values.query';
import { InsertValueCommand } from './services/insertValue/insert-value.command';
import { GetHighestSubsetValuesQuery } from './services/getHighestSubsetValues/get-highest-subset-values.query';

@Injectable()
export class LuminosityService {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  async getLuminosityValues(
    order?: string,
    direction?: 'ASC' | 'DESC',
    limit?: number,
  ) {
    const query = new GetValuesQuery(order, direction, limit);

    return this.queryBus.execute(query);
  }

  async getHighestSubsetValues() {
    const query = new GetHighestSubsetValuesQuery();

    return this.queryBus.execute(query);
  }

  async insertRandomValue() {
    const { value, timestamp } = this.generateRandomValue(0.01, 19.99);

    const command = new InsertValueCommand(value, timestamp);

    await this.commandBus.execute(command);
  }

  private generateRandomValue(
    min: number,
    max: number,
  ): { value: number; timestamp: Date } {
    const randomNumber = parseFloat(
      (Math.random() * (max - min) + min).toFixed(2),
    );
    const ts = new Date();
    return { value: randomNumber, timestamp: ts };
  }
}
