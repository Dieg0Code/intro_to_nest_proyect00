import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  // Run seed by calling GET /seed
  @Get()
  runSeed() {
    return this.seedService.populateDB();
  }
}
