import { Schema, Document } from 'mongoose';
export declare const MentorshipSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    mentor: import("mongoose").Types.ObjectId;
    mentee: import("mongoose").Types.ObjectId;
    startDate: NativeDate;
    status: "active" | "completed";
    goals: string[];
    endDate?: NativeDate;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    mentor: import("mongoose").Types.ObjectId;
    mentee: import("mongoose").Types.ObjectId;
    startDate: NativeDate;
    status: "active" | "completed";
    goals: string[];
    endDate?: NativeDate;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    mentor: import("mongoose").Types.ObjectId;
    mentee: import("mongoose").Types.ObjectId;
    startDate: NativeDate;
    status: "active" | "completed";
    goals: string[];
    endDate?: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Mentorship extends Document {
    mentor: string;
    mentee: string;
    startDate: Date;
    endDate: Date;
    status: string;
    goals: string[];
    createdAt: Date;
}
export declare class MentorshipModel extends Document implements Mentorship {
    mentor: string;
    mentee: string;
    startDate: Date;
    endDate: Date;
    status: string;
    goals: string[];
    createdAt: Date;
}
