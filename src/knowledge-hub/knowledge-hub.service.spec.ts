import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeHubService } from './knowledge-hub.service';

describe('KnowledgeHubService', () => {
  let service: KnowledgeHubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnowledgeHubService],
    }).compile();

    service = module.get<KnowledgeHubService>(KnowledgeHubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
