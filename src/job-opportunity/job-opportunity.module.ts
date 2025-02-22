import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobOpportunityController } from './job-opportunity.controller';
import { JobOpportunityService } from './job-opportunity.service';
import { JobOpportunity, JobOpportunitySchema } from './schemas/job-opportunity.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: JobOpportunity.name, schema: JobOpportunitySchema }])],
  controllers: [JobOpportunityController],
  providers: [JobOpportunityService],
})
export class JobOpportunityModule {}