import { Test, TestingModule } from '@nestjs/testing';
import { CartsRepositoryService } from './carts.repository.service';

describe('CartsRepositoryService', () => {
  let service: CartsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartsRepositoryService],
    }).compile();

    service = module.get<CartsRepositoryService>(CartsRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
