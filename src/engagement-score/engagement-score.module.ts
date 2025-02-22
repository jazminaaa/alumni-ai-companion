import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EngagementScoreController } from './engagement-score.controller';
import { EngagementScoreService } from './engagement-score.service';
import { EngagementScore, EngagementScoreModel, EngagementScoreSchema } from './schemas/engagement-score.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: EngagementScoreModel.name, schema: EngagementScoreSchema }])],
  controllers: [EngagementScoreController],
  providers: [EngagementScoreService],
})
export class EngagementScoreModule {}