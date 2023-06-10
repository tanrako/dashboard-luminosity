import LuminosityRepository from './luminosity.repository';

describe('LuminosityRepository', () => {
  let luminosityRepository: LuminosityRepository;

  // Mock data for testing
  const mockLuminosityData = [
    { value: 8.46, timestamp: '2023-06-08 16:20:49' },
    { value: 0.42, timestamp: '2023-06-08 16:20:47' },
    { value: 5.9, timestamp: '2023-06-08 16:20:45' },
    { value: 9.93, timestamp: '2023-06-08 16:20:43' },
    { value: 5.51, timestamp: '2023-06-08 16:20:41' },
    { value: 1.94, timestamp: '2023-06-08 16:20:39' },
    { value: 7.06, timestamp: '2023-06-08 16:20:37' },
    { value: 10.53, timestamp: '2023-06-08 16:20:35' },
    { value: 11.51, timestamp: '2023-06-08 16:20:33' },
    { value: 12.93, timestamp: '2023-06-08 16:20:31' },
  ];

  // Mock Database instance
  const mockDatabase = {
    db: {},
    all: jest.fn().mockImplementation(() => mockLuminosityData),
    run: jest.fn().mockImplementation(() => mockLuminosityData),
  };

  beforeEach(() => {
    return (luminosityRepository = new LuminosityRepository(
      mockDatabase as any,
    ));
  });

  it('should return the latest luminosity values', async () => {
    const result = await luminosityRepository.getValues(
      'timestamp',
      'DESC',
      10,
    );

    expect(result).toEqual(mockLuminosityData);
    expect(mockDatabase.all).toHaveBeenCalledWith(
      'SELECT * FROM luminosity ORDER BY timestamp DESC LIMIT 10',
    );
  });

  it('should return the highest subset of 5 consecutive luminosity values', async () => {
    const result = await luminosityRepository.getHighestSubsetValues();

    expect(mockDatabase.all).toHaveBeenCalledWith(
      'SELECT * FROM luminosity ORDER BY timestamp DESC LIMIT 10',
    );
    expect(result).toEqual([
      { value: 1.94, timestamp: '2023-06-08 16:20:39' },
      { value: 7.06, timestamp: '2023-06-08 16:20:37' },
      { value: 10.53, timestamp: '2023-06-08 16:20:35' },
      { value: 11.51, timestamp: '2023-06-08 16:20:33' },
      { value: 12.93, timestamp: '2023-06-08 16:20:31' },
    ]);
  });

  it('should insert luminosity value', async () => {
    const value = 20;
    const timestamp = new Date();

    await luminosityRepository.insertValue(value, timestamp);

    expect(mockDatabase.run).toHaveBeenCalledWith(
      `INSERT INTO luminosity (value, timestamp)
    VALUES (?, ?)`,
      [value, timestamp],
    );
  });
});
