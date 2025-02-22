import { MentorshipService } from './mentorship.service';
import { MentorshipDto } from './dto/mentorship.dto';
export declare class MentorshipController {
    private readonly mentorshipService;
    constructor(mentorshipService: MentorshipService);
    create(mentorshipDto: MentorshipDto): Promise<import("./schemas/mentorship.schema").Mentorship>;
    findAll(): Promise<import("./schemas/mentorship.schema").Mentorship[]>;
}
