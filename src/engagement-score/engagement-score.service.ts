import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EngagementScore, EngagementScoreModel } from './schemas/engagement-score.schema';
import { EngagementScoreDto } from './dto/engagement-score.dto';

@Injectable()
export class EngagementScoreService {
  constructor(@InjectModel(EngagementScoreModel.name) private engagementScoreModel: Model<EngagementScore>) {}

  async create(engagementScoreDto: EngagementScoreDto): Promise<EngagementScore> {
    const createdEngagementScore = new this.engagementScoreModel(engagementScoreDto);
    return createdEngagementScore.save();
  }

  async findByUserId(userId: string): Promise<EngagementScore[]> {
    return this.engagementScoreModel.find({ userId }).exec();
  }
}