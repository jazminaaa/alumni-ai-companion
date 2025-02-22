"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerPathModel = exports.CareerPathSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CareerPathSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    recommendedPaths: { type: [String], default: [] },
    recommendedCourses: { type: [String], default: [] },
    insights: { type: String },
    createdAt: { type: Date, default: Date.now },
});
class CareerPathModel extends mongoose_1.Document {
}
exports.CareerPathModel = CareerPathModel;
//# sourceMappingURL=career-path.schema.js.map