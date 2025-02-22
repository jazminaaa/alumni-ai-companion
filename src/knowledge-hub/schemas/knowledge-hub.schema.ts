import { Schema, Document } from 'mongoose';

export const KnowledgeHubSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: { type: [String], default: [] },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export interface KnowledgeHub extends Document {
  title: string;
  content: string;
  author: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  createdAt: Date;
}

export class KnowledgeHubModel extends Document implements KnowledgeHub {
    title: string;
    content: string;
    author: string;
    tags: string[];
    upvotes: number;
    downvotes: number;
    createdAt: Date;
  }