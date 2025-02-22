import { Schema, Document } from 'mongoose';
export declare const CareerPathSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    userId: import("mongoose").Types.ObjectId;
    recommendedPaths: string[];
    recommendedCourses: string[];
    insights?: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    userId: import("mongoose").Types.ObjectId;
    recommendedPaths: string[];
    recommendedCourses: string[];
    insights?: string;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    userId: import("mongoose").Types.ObjectId;
    recommendedPaths: string[];
    recommendedCourses: string[];
    insights?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface CareerPath extends Document {
    userId: string;
    recommendedPaths: string[];
    recommendedCourses: string[];
    insights: string;
    createdAt: Date;
}
export declare class CareerPathModel extends Document implements CareerPath {
    userId: string;
    recommendedPaths: string[];
    recommendedCourses: string[];
    insights: string;
    createdAt: Date;
}
