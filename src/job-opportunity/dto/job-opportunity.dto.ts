import { IsNotEmpty, IsArray } from 'class-validator';

export class JobOpportunityDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  postedBy: string;

  @IsArray()
  tags: string[];
}