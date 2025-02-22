import { IsNotEmpty, IsArray } from 'class-validator';

export class CareerPathDto {
  @IsNotEmpty()
  userId: string;

  @IsArray()
  recommendedPaths: string[];

  @IsArray()
  recommendedCourses: string[];

  @IsNotEmpty()
  insights: string;
}