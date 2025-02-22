import { EventService } from './event.service';
import { EventDto } from './dto/event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(eventDto: EventDto): Promise<import("./schemas/event.schema").Event>;
    findAll(): Promise<import("./schemas/event.schema").Event[]>;
}
