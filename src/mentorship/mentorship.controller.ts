import { Controller, Post, Body, Get } from '@nestjs/common';
import { MentorshipService } from './mentorship.service';
import { MentorshipDto } from './dto/mentorship.dto';

@Controller('mentorships')
export class MentorshipController {
  constructor(private readonly mentorshipService: MentorshipService) {}

  @Post()
  async create(@Body() mentorshipDto: MentorshipDto) {
    return this.mentorshipService.create(mentorshipDto);
  }

  @Get()
  async findAll() {
    return this.mentorshipService.findAll();
  }
}