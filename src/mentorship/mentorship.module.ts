import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MentorshipController } from './mentorship.controller';
import { MentorshipService } from './mentorship.service';
import { MentorshipModel, MentorshipSchema } from './schemas/mentorship.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: MentorshipModel.name, schema: MentorshipSchema }])],
  controllers: [MentorshipController],
  providers: [MentorshipService],
})
export class MentorshipModule {}