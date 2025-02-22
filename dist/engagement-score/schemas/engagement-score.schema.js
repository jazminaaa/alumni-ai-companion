"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngagementScoreModel = exports.EngagementScoreSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EngagementScoreSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now },
});
class EngagementScoreModel extends mongoose_1.Document {
}
exports.EngagementScoreModel = EngagementScoreModel;
//# sourceMappingURL=engagement-score.schema.js.map