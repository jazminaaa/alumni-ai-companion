"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'alumni'], required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    skills: { type: [String], default: [] },
    interests: { type: [String], default: [] },
    careerGoals: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
class UserModel extends mongoose_1.Document {
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.schema.js.map