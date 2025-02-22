"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EventSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    organizer: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    attendees: { type: [mongoose_1.Schema.Types.ObjectId], ref: 'User', default: [] },
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=event.schema.js.map