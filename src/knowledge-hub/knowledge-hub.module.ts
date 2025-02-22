import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KnowledgeHubController } from './knowledge-hub.controller';
import { KnowledgeHubService } from './knowledge-hub.service';
import { KnowledgeHub, KnowledgeHubModel, KnowledgeHubSchema } from './schemas/knowledge-hub.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: KnowledgeHubModel.name, schema: KnowledgeHubSchema }])],
  controllers: [KnowledgeHubController],
  providers: [KnowledgeHubService],
})
export class KnowledgeHubModule {}