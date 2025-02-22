"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeHubModel = exports.KnowledgeHubSchema = void 0;
const mongoose_1 = require("mongoose");
exports.KnowledgeHubSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], default: [] },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});
class KnowledgeHubModel extends mongoose_1.Document {
}
exports.KnowledgeHubModel = KnowledgeHubModel;
//# sourceMappingURL=knowledge-hub.schema.js.map