import { Controller, Post, Body, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './dto/event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() eventDto: EventDto) {
    return this.eventService.create(eventDto);
  }

  @Get()
  async findAll() {
    return this.eventService.findAll();
  }
}