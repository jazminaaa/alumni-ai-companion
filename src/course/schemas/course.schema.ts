import { Schema, Document } from 'mongoose';

// Define the schema
export const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: { type: [String], default: [] },
  duration: { type: String, required: true },
  level: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Define the class
export class Course extends Document {
  title: string;
  description: string;
  instructor: string;
  tags: string[];
  duration: string;
  level: string;
  createdAt: Date;
}