import { Test, TestingModule } from '@nestjs/testing';
import { F2estaticController } from './f2estatic.controller';

describe('F2estaticController', () => {
  let controller: F2estaticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [F2estaticController],
    }).compile();

    controller = module.get<F2estaticController>(F2estaticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
