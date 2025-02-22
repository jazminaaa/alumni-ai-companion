import { Controller, Post, Body, Get } from '@nestjs/common';
import { JobOpportunityService } from './job-opportunity.service';
import { JobOpportunityDto } from './dto/job-opportunity.dto';

@Controller('job-opportunities')
export class JobOpportunityController {
  constructor(private readonly jobOpportunityService: JobOpportunityService) {}

  @Post()
  async create(@Body() jobOpportunityDto: JobOpportunityDto) {
    return this.jobOpportunityService.create(jobOpportunityDto);
  }

  @Get()
  async findAll() {
    return this.jobOpportunityService.findAll();
  }
}