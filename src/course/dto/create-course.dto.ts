import { IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  instructor: string; // ID of the user who is the instructor

  @IsArray()
  @IsOptional()
  tags: string[]; // Optional array of tags (e.g., ["Web Development", "JavaScript"])

  @IsNotEmpty()
  @IsString()
  duration: string; // Duration of the course (e.g., "10 hours")

  @IsNotEmpty()
  @IsString()
  level: string; // Level of the course (e.g., "Beginner", "Intermediate", "Advanced")
}