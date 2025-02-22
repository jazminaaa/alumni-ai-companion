import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobOpportunity } from './schemas/job-opportunity.schema';
import { JobOpportunityDto } from './dto/job-opportunity.dto';

@Injectable()
export class JobOpportunityService {
  constructor(@InjectModel(JobOpportunity.name) private jobOpportunityModel: Model<JobOpportunity>) {}

  async create(jobOpportunityDto: JobOpportunityDto): Promise<JobOpportunity> {
    const createdJobOpportunity = new this.jobOpportunityModel(jobOpportunityDto);
    return createdJobOpportunity.save();
  }

  async findAll(): Promise<JobOpportunity[]> {
    return this.jobOpportunityModel.find().exec();
  }
}