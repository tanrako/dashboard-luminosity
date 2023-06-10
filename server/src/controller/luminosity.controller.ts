import { Controller, Get, Post } from '@nestjs/common';
import { LuminosityService } from '../domains/luminosity/luminosity.service';
import { Luminosity } from '../domains/luminosity/model/luminosity.entity';

@Controller('luminosity')
export class LuminosityController {
  constructor(private luminosityService: LuminosityService) {}

  @Get('latest-values')
  async getLatestValues(): Promise<Luminosity[]> {
    return this.luminosityService.getLuminosityValues('timestamp', 'DESC', 10);
  }

  @Get('highest-subset-values')
  async getHighestSubsetValues(): Promise<Luminosity[]> {
    return this.luminosityService.getHighestSubsetValues();
  }

  @Post('insert-random-value')
  async insertRandomValue(): Promise<void> {
    return this.luminosityService.insertRandomValue();
  }

  // @Get('highest-subset')
  // async getHighestSubset(): Promise<Luminosity[]> {
  //   return this.luminosityService.getHighestSubset();
  // }
}
