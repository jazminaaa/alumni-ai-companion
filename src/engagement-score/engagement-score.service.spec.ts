import { Test, TestingModule } from '@nestjs/testing';
import { EngagementScoreService } from './engagement-score.service';

describe('EngagementScoreService', () => {
  let service: EngagementScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngagementScoreService],
    }).compile();

    service = module.get<EngagementScoreService>(EngagementScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
