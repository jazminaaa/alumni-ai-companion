import { Schema, Document } from 'mongoose';
export declare const JobOpportunitySchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    description: string;
    title: string;
    location: string;
    tags: string[];
    company: string;
    postedBy: import("mongoose").Types.ObjectId;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    description: string;
    title: string;
    location: string;
    tags: string[];
    company: string;
    postedBy: import("mongoose").Types.ObjectId;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    description: string;
    title: string;
    location: string;
    tags: string[];
    company: string;
    postedBy: import("mongoose").Types.ObjectId;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface JobOpportunity extends Document {
    title: string;
    description: string;
    company: string;
    location: string;
    postedBy: string;
    tags: string[];
    createdAt: Date;
}
export declare class JobOpportunity extends Document implements JobOpportunity {
    title: string;
    description: string;
    company: string;
    location: string;
    postedBy: string;
    tags: string[];
    createdAt: Date;
}
