import { JobOpportunityService } from './job-opportunity.service';
import { JobOpportunityDto } from './dto/job-opportunity.dto';
export declare class JobOpportunityController {
    private readonly jobOpportunityService;
    constructor(jobOpportunityService: JobOpportunityService);
    create(jobOpportunityDto: JobOpportunityDto): Promise<import("./schemas/job-opportunity.schema").JobOpportunity>;
    findAll(): Promise<import("./schemas/job-opportunity.schema").JobOpportunity[]>;
}
