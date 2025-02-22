import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CareerPathService } from './career-path.service';
import { CareerPathDto } from './dto/career-path.dto';

@Controller('career-paths')
export class CareerPathController {
  constructor(private readonly careerPathService: CareerPathService) {}

  @Post()
  async create(@Body() careerPathDto: CareerPathDto) {
    return this.careerPathService.create(careerPathDto);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.careerPathService.findByUserId(userId);
  }
}