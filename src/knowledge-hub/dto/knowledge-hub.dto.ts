import { IsNotEmpty, IsArray } from 'class-validator';

export class KnowledgeHubDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  author: string;

  @IsArray()
  tags: string[];
}