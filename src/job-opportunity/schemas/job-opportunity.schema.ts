import { Schema, Document } from 'mongoose';

export const JobOpportunitySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  postedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export interface JobOpportunity extends Document {
  title: string;
  description: string;
  company: string;
  location: string;
  postedBy: string;
  tags: string[];
  createdAt: Date;
}

export class JobOpportunity extends Document implements JobOpportunity{
    title: string;
    description: string;
    company: string;
    location: string;
    postedBy: string;
    tags: string[];
    createdAt: Date;
  }