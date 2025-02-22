import { Controller, Post, Body, Get } from '@nestjs/common';
import { KnowledgeHubService } from './knowledge-hub.service';
import { KnowledgeHubDto } from './dto/knowledge-hub.dto';

@Controller('knowledge-hub')
export class KnowledgeHubController {
  constructor(private readonly knowledgeHubService: KnowledgeHubService) {}

  @Post()
  async create(@Body() knowledgeHubDto: KnowledgeHubDto) {
    return this.knowledgeHubService.create(knowledgeHubDto);
  }

  @Get()
  async findAll() {
    return this.knowledgeHubService.findAll();
  }
}