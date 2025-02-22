import { Test, TestingModule } from '@nestjs/testing';
import { EngagementScoreController } from './engagement-score.controller';

describe('EngagementScoreController', () => {
  let controller: EngagementScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngagementScoreController],
    }).compile();

    controller = module.get<EngagementScoreController>(EngagementScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
