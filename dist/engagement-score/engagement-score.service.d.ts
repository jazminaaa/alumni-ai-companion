import { Model } from 'mongoose';
import { EngagementScore } from './schemas/engagement-score.schema';
import { EngagementScoreDto } from './dto/engagement-score.dto';
export declare class EngagementScoreService {
    private engagementScoreModel;
    constructor(engagementScoreModel: Model<EngagementScore>);
    create(engagementScoreDto: EngagementScoreDto): Promise<EngagementScore>;
    findByUserId(userId: string): Promise<EngagementScore[]>;
}
