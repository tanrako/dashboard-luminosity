import { LuminosityService } from '../domains/luminosity/luminosity.service';
import { Luminosity } from '../domains/luminosity/model/luminosity.entity';
export declare class LuminosityController {
    private luminosityService;
    constructor(luminosityService: LuminosityService);
    getLatestValues(): Promise<Luminosity[]>;
    getHighestSubsetValues(): Promise<Luminosity[]>;
    insertRandomValue(): Promise<void>;
}
