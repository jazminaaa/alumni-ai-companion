import { Schema, Document } from 'mongoose';
export declare const EventSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    date: NativeDate;
    description: string;
    title: string;
    location: string;
    organizer: import("mongoose").Types.ObjectId;
    attendees: import("mongoose").Types.ObjectId[];
    tags: string[];
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    date: NativeDate;
    description: string;
    title: string;
    location: string;
    organizer: import("mongoose").Types.ObjectId;
    attendees: import("mongoose").Types.ObjectId[];
    tags: string[];
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    date: NativeDate;
    description: string;
    title: string;
    location: string;
    organizer: import("mongoose").Types.ObjectId;
    attendees: import("mongoose").Types.ObjectId[];
    tags: string[];
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Event extends Document {
    title: string;
    description: string;
    date: Date;
    location: string;
    organizer: string;
    attendees: string[];
    tags: string[];
    createdAt: Date;
}
