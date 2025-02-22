import { Model } from 'mongoose';
import { Mentorship } from './schemas/mentorship.schema';
import { MentorshipDto } from './dto/mentorship.dto';
export declare class MentorshipService {
    private mentorshipModel;
    constructor(mentorshipModel: Model<Mentorship>);
    create(mentorshipDto: MentorshipDto): Promise<Mentorship>;
    findAll(): Promise<Mentorship[]>;
}
