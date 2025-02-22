import { Schema, Document } from 'mongoose';
export declare const KnowledgeHubSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    title: string;
    tags: string[];
    content: string;
    author: import("mongoose").Types.ObjectId;
    upvotes: number;
    downvotes: number;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    title: string;
    tags: string[];
    content: string;
    author: import("mongoose").Types.ObjectId;
    upvotes: number;
    downvotes: number;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    title: string;
    tags: string[];
    content: string;
    author: import("mongoose").Types.ObjectId;
    upvotes: number;
    downvotes: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface KnowledgeHub extends Document {
    title: string;
    content: string;
    author: string;
    tags: string[];
    upvotes: number;
    downvotes: number;
    createdAt: Date;
}
export declare class KnowledgeHubModel extends Document implements KnowledgeHub {
    title: string;
    content: string;
    author: string;
    tags: string[];
    upvotes: number;
    downvotes: number;
    createdAt: Date;
}
