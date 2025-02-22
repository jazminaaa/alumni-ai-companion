"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobOpportunity = exports.JobOpportunitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.JobOpportunitySchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    postedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
});
class JobOpportunity extends mongoose_1.Document {
}
exports.JobOpportunity = JobOpportunity;
//# sourceMappingURL=job-opportunity.schema.js.map