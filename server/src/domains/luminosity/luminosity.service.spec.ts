import { Test, TestingModule } from '@nestjs/testing';
import { LuminosityService } from './luminosity.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetValuesQuery } from './services/getLatestValues/get-latest-values.query';
import { InsertValueCommand } from './services/insertValue/insert-value.command';
import { GetHighestSubsetValuesQuery } from './services/getHighestSubsetValues/get-highest-subset-values.query';

describe('LuminosityService', () => {
  let luminosityService: LuminosityService;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LuminosityService,
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: CommandBus,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    luminosityService = module.get<LuminosityService>(LuminosityService);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });

  describe('getLatestLuminosityValues', () => {
    it('should execute GetValuesQuery with default parameters', async () => {
      const executeSpy = jest.spyOn(queryBus, 'execute');

      await luminosityService.getLuminosityValues();

      expect(executeSpy).toHaveBeenCalledWith(
        new GetValuesQuery('timestamp', 'DESC', 10),
      );
    });

    it('should execute GetValuesQuery with custom parameters', async () => {
      const executeSpy = jest.spyOn(queryBus, 'execute');
      const order = 'customField';
      const direction = 'ASC';
      const limit = 5;

      await luminosityService.getLuminosityValues(order, direction, limit);

      expect(executeSpy).toHaveBeenCalledWith(
        new GetValuesQuery(order, direction, limit),
      );
    });
  });

  describe('getHighestSubsetValues', () => {
    it('should execute GetHighestSubsetValuesQuery', async () => {
      const executeSpy = jest.spyOn(queryBus, 'execute');

      await luminosityService.getHighestSubsetValues();

      expect(executeSpy).toHaveBeenCalledWith(
        new GetHighestSubsetValuesQuery(),
      );
    });
  });

  describe('insertValue', () => {
    it('should execute InsertValueCommand with a random number and timestamp', async () => {
      const executeSpy = jest.spyOn(commandBus, 'execute');
      const randomNumber = 10.5; // Replace with your desired random number
      const timestamp = new Date(); // Replace with your desired timestamp

      luminosityService['generateRandomValue'] = jest
        .fn()
        .mockReturnValue({ value: randomNumber, timestamp });

      await luminosityService.insertRandomValue();

      expect(executeSpy).toHaveBeenCalledWith(
        new InsertValueCommand(randomNumber, timestamp),
      );
    });
  });
});
