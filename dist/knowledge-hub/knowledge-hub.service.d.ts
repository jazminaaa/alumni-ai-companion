import { Model } from 'mongoose';
import { KnowledgeHub } from './schemas/knowledge-hub.schema';
import { KnowledgeHubDto } from './dto/knowledge-hub.dto';
export declare class KnowledgeHubService {
    private knowledgeHubModel;
    constructor(knowledgeHubModel: Model<KnowledgeHub>);
    create(knowledgeHubDto: KnowledgeHubDto): Promise<KnowledgeHub>;
    findAll(): Promise<KnowledgeHub[]>;
}
