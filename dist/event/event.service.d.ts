import { Model } from 'mongoose';
import { Event } from './schemas/event.schema';
import { EventDto } from './dto/event.dto';
export declare class EventService {
    private eventModel;
    constructor(eventModel: Model<Event>);
    create(eventDto: EventDto): Promise<Event>;
    findAll(): Promise<Event[]>;
}
