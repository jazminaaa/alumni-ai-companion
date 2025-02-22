import { EngagementScoreService } from './engagement-score.service';
import { EngagementScoreDto } from './dto/engagement-score.dto';
export declare class EngagementScoreController {
    private readonly engagementScoreService;
    constructor(engagementScoreService: EngagementScoreService);
    create(engagementScoreDto: EngagementScoreDto): Promise<import("./schemas/engagement-score.schema").EngagementScore>;
    findByUserId(userId: string): Promise<import("./schemas/engagement-score.schema").EngagementScore[]>;
}
