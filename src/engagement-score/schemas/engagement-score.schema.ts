import { Schema, Document } from 'mongoose';

export const EngagementScoreSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
});

export interface EngagementScore extends Document {
  userId: string;
  score: number;
  lastUpdated: Date;
}

export class EngagementScoreModel extends Document implements EngagementScore {
    userId: string;
    score: number;
    lastUpdated: Date;
  }