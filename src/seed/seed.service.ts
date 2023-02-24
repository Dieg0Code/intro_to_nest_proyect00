import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed ';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandServices: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWhitSeedData(CARS_SEED);
    this.brandServices.fillBrandsWhitSeedData(BRANDS_SEED);

    return 'Seed executed successfully';
  }
}
