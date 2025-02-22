import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeHubController } from './knowledge-hub.controller';

describe('KnowledgeHubController', () => {
  let controller: KnowledgeHubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeHubController],
    }).compile();

    controller = module.get<KnowledgeHubController>(KnowledgeHubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
