import { KnowledgeHubService } from './knowledge-hub.service';
import { KnowledgeHubDto } from './dto/knowledge-hub.dto';
export declare class KnowledgeHubController {
    private readonly knowledgeHubService;
    constructor(knowledgeHubService: KnowledgeHubService);
    create(knowledgeHubDto: KnowledgeHubDto): Promise<import("./schemas/knowledge-hub.schema").KnowledgeHub>;
    findAll(): Promise<import("./schemas/knowledge-hub.schema").KnowledgeHub[]>;
}
