import { Schema, Document } from 'mongoose';
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    role: "student" | "alumni";
    firstName: string;
    lastName: string;
    skills: string[];
    interests: string[];
    careerGoals: string[];
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    role: "student" | "alumni";
    firstName: string;
    lastName: string;
    skills: string[];
    interests: string[];
    careerGoals: string[];
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    role: "student" | "alumni";
    firstName: string;
    lastName: string;
    skills: string[];
    interests: string[];
    careerGoals: string[];
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface User extends Document {
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    skills: string[];
    interests: string[];
    careerGoals: string[];
    createdAt: Date;
    updatedAt: Date;
    token: string;
}
export declare class UserModel extends Document implements User {
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    skills: string[];
    interests: string[];
    careerGoals: string[];
    createdAt: Date;
    updatedAt: Date;
    token: string;
}
