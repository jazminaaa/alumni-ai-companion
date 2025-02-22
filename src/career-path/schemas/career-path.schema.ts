import { Schema, Document } from 'mongoose';

export const CareerPathSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  recommendedPaths: { type: [String], default: [] },
  recommendedCourses: { type: [String], default: [] },
  insights: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export interface CareerPath extends Document {
  userId: string;
  recommendedPaths: string[];
  recommendedCourses: string[];
  insights: string;
  createdAt: Date;
}

export class CareerPathModel extends Document implements CareerPath{
    userId: string;
    recommendedPaths: string[];
    recommendedCourses: string[];
    insights: string;
    createdAt: Date;
  }