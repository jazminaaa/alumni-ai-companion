import { Model } from 'mongoose';
import { JobOpportunity } from './schemas/job-opportunity.schema';
import { JobOpportunityDto } from './dto/job-opportunity.dto';
export declare class JobOpportunityService {
    private jobOpportunityModel;
    constructor(jobOpportunityModel: Model<JobOpportunity>);
    create(jobOpportunityDto: JobOpportunityDto): Promise<JobOpportunity>;
    findAll(): Promise<JobOpportunity[]>;
}
