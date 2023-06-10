import { Test, TestingModule } from '@nestjs/testing';
import { LuminosityService } from '../domains/luminosity/luminosity.service';
import { LuminosityController } from './luminosity.controller';

describe('LuminosityController', () => {
  let luminosityController: LuminosityController;
  let luminosityService: LuminosityService;
  let app: TestingModule;

  const MOCKED_LUMINOSITY_VALUES = [
    { value: 10, timestamp: '2023-06-01' },
    { value: 15, timestamp: '2023-06-02' },
    { value: 20, timestamp: '2023-06-03' },
  ];

  const mockLuminosityService = {
    getLuminosityValues: () => MOCKED_LUMINOSITY_VALUES,
    getHighestSubsetValues: () => MOCKED_LUMINOSITY_VALUES,
    insertRandomValue: jest.fn(),
  };

  const luminosityServiceProvider = {
    provide: LuminosityService,
    useValue: mockLuminosityService,
  };

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [LuminosityController],
      providers: [luminosityServiceProvider],
    }).compile();

    luminosityController = app.get<LuminosityController>(LuminosityController);
    luminosityService = app.get<LuminosityService>(LuminosityService);
  });

  it('should be defined', () => {
    const controller: LuminosityController =
      app.get<LuminosityController>(LuminosityController);
    expect(controller).toBeDefined();
  });

  it('should call service getLuminosityValues method', async () => {
    jest
      .spyOn(luminosityService, 'getLuminosityValues')
      .mockImplementation(async () => MOCKED_LUMINOSITY_VALUES);

    const result = await luminosityController.getLatestValues();

    expect(luminosityService.getLuminosityValues).toHaveBeenCalledWith(
      'timestamp',
      'DESC',
      10,
    );
    expect(result).toEqual(MOCKED_LUMINOSITY_VALUES);
  });

  it('should call service getHighestSubsetValues method', async () => {
    jest.spyOn(luminosityService, 'getHighestSubsetValues');

    await luminosityController.getHighestSubsetValues();

    expect(luminosityService.getHighestSubsetValues).toHaveBeenCalled();
  });

  it('should call service insertRandomValue method', async () => {
    jest.spyOn(luminosityService, 'insertRandomValue');

    await luminosityController.insertRandomValue();

    expect(luminosityService.insertRandomValue).toHaveBeenCalled();
  });
});
