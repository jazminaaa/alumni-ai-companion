"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = require("multer");
const path = require("path");
exports.multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: './profiles_images',
        filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            const ext = path.extname(file.originalname);
            cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            return cb(new Error('Unsupported file format'), false);
        }
        cb(null, true);
    },
};
//# sourceMappingURL=multer.config.js.map