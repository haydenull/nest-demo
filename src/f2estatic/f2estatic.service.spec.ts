import { Test, TestingModule } from '@nestjs/testing';
import { F2estaticService } from './f2estatic.service';

describe('F2estaticService', () => {
  let service: F2estaticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [F2estaticService],
    }).compile();

    service = module.get<F2estaticService>(F2estaticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
