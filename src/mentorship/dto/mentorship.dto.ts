import { IsNotEmpty, IsArray, IsDate } from 'class-validator';

export class MentorshipDto {
  @IsNotEmpty()
  mentor: string;

  @IsNotEmpty()
  mentee: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsNotEmpty()
  status: string;

  @IsArray()
  goals: string[];
}