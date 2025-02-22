import { Schema, Document } from 'mongoose';
export declare const EngagementScoreSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    userId: import("mongoose").Types.ObjectId;
    score: number;
    lastUpdated: NativeDate;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    userId: import("mongoose").Types.ObjectId;
    score: number;
    lastUpdated: NativeDate;
}>> & import("mongoose").FlatRecord<{
    userId: import("mongoose").Types.ObjectId;
    score: number;
    lastUpdated: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface EngagementScore extends Document {
    userId: string;
    score: number;
    lastUpdated: Date;
}
export declare class EngagementScoreModel extends Document implements EngagementScore {
    userId: string;
    score: number;
    lastUpdated: Date;
}
