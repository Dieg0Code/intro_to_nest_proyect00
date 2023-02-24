import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  // Mock data
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    // Extract name from createBrandDto
    const { name } = createBrandDto;
    // Create a new brand
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    // Add brand to brands array
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    // Find brand by id
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    // Find brand by id
    let brandDB = this.findOne(id);
    // Update brand, map over brands array and return the updated brand
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto }; // update brand with updateBrandDto
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return this.brands;
  }

  fillBrandsWhitSeedData(brandsSeed: Brand[]) {
    this.brands = brandsSeed;
  }
}
