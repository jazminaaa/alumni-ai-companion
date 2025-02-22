"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.CourseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CourseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], default: [] },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
class Course extends mongoose_1.Document {
}
exports.Course = Course;
//# sourceMappingURL=course.schema.js.map