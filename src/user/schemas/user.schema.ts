import { Schema, Document } from 'mongoose';

// Define the schema
export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'alumni'], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  skills: { type: [String], default: [] },
  interests: { type: [String], default: [] },
  careerGoals: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define the interface for type-checking
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

// Define the class for Mongoose
export class UserModel extends Document implements User {
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