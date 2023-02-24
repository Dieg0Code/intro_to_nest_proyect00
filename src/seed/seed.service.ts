import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed ';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService, // Inject CarsService
    private readonly brandServices: BrandsService, // Inject BrandsService
  ) {}

  populateDB() {
    this.carsService.fillCarsWhitSeedData(CARS_SEED); // Call fillCarsWhitSeedData method from CarsService and pass CARS_SEED
    this.brandServices.fillBrandsWhitSeedData(BRANDS_SEED); // Call fillBrandsWhitSeedData method from BrandsService and pass BRANDS_SEED

    return 'Seed executed successfully';
  }
}
