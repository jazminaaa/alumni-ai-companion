import { Test, TestingModule } from '@nestjs/testing';
import { CareerPathController } from './career-path.controller';

describe('CareerPathController', () => {
  let controller: CareerPathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareerPathController],
    }).compile();

    controller = module.get<CareerPathController>(CareerPathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
