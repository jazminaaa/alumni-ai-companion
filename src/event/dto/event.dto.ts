import { IsNotEmpty, IsArray, IsDate } from 'class-validator';

export class EventDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsDate()
  date: Date;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  organizer: string;

  @IsArray()
  attendees: string[];

  @IsArray()
  tags: string[];
}