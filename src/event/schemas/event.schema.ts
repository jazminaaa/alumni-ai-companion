import { Schema, Document } from 'mongoose';

export const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: { type: [Schema.Types.ObjectId], ref: 'User', default: [] },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export interface Event extends Document {
  title: string;
  description: string;
  date: Date;
  location: string;
  organizer: string;
  attendees: string[];
  tags: string[];
  createdAt: Date;
}