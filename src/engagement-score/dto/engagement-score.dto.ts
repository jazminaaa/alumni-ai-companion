import { IsNotEmpty } from 'class-validator';

export class EngagementScoreDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  score: number;
}