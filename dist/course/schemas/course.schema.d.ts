import { Schema, Document } from 'mongoose';
export declare const CourseSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    description: string;
    title: string;
    tags: string[];
    instructor: import("mongoose").Types.ObjectId;
    duration: string;
    level: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    description: string;
    title: string;
    tags: string[];
    instructor: import("mongoose").Types.ObjectId;
    duration: string;
    level: string;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    description: string;
    title: string;
    tags: string[];
    instructor: import("mongoose").Types.ObjectId;
    duration: string;
    level: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Course extends Document {
    title: string;
    description: string;
    instructor: string;
    tags: string[];
    duration: string;
    level: string;
    createdAt: Date;
}
