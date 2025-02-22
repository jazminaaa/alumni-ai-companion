import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EngagementScoreService } from './engagement-score.service';
import { EngagementScoreDto } from './dto/engagement-score.dto';

@Controller('engagement-scores')
export class EngagementScoreController {
  constructor(private readonly engagementScoreService: EngagementScoreService) {}

  @Post()
  async create(@Body() engagementScoreDto: EngagementScoreDto) {
    return this.engagementScoreService.create(engagementScoreDto);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.engagementScoreService.findByUserId(userId);
  }
}