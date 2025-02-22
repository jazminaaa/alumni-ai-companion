"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorshipModel = exports.MentorshipSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MentorshipSchema = new mongoose_1.Schema({
    mentor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    mentee: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    status: { type: String, enum: ['active', 'completed'], default: 'active' },
    goals: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
});
class MentorshipModel extends mongoose_1.Document {
}
exports.MentorshipModel = MentorshipModel;
//# sourceMappingURL=mentorship.schema.js.map