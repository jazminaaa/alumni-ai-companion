import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mentorship, MentorshipModel } from './schemas/mentorship.schema';
import { MentorshipDto } from './dto/mentorship.dto';

@Injectable()
export class MentorshipService {
  constructor(@InjectModel(MentorshipModel.name) private mentorshipModel: Model<Mentorship>) {}

  async create(mentorshipDto: MentorshipDto): Promise<Mentorship> {
    const createdMentorship = new this.mentorshipModel(mentorshipDto);
    return createdMentorship.save();
  }

  async findAll(): Promise<Mentorship[]> {
    return this.mentorshipModel.find().exec();
  }
}