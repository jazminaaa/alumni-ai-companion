import { Schema, Document } from 'mongoose';

export const MentorshipSchema = new Schema({
  mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mentee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
  goals: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export interface Mentorship extends Document {
  mentor: string;
  mentee: string;
  startDate: Date;
  endDate: Date;
  status: string;
  goals: string[];
  createdAt: Date;
}

export class MentorshipModel extends Document implements Mentorship{
    mentor: string;
    mentee: string;
    startDate: Date;
    endDate: Date;
    status: string;
    goals: string[];
    createdAt: Date;
  }