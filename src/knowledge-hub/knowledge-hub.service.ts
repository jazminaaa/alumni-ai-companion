import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KnowledgeHub, KnowledgeHubModel } from './schemas/knowledge-hub.schema';
import { KnowledgeHubDto } from './dto/knowledge-hub.dto';

@Injectable()
export class KnowledgeHubService {
  constructor(@InjectModel(KnowledgeHubModel.name) private knowledgeHubModel: Model<KnowledgeHub>) {}

  async create(knowledgeHubDto: KnowledgeHubDto): Promise<KnowledgeHub> {
    const createdKnowledgeHub = new this.knowledgeHubModel(knowledgeHubDto);
    return createdKnowledgeHub.save();
  }

  async findAll(): Promise<KnowledgeHub[]> {
    return this.knowledgeHubModel.find().exec();
  }
}