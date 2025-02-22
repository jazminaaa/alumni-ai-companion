"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerPathModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const career_path_controller_1 = require("./career-path.controller");
const career_path_service_1 = require("./career-path.service");
const career_path_schema_1 = require("./schemas/career-path.schema");
let CareerPathModule = class CareerPathModule {
};
exports.CareerPathModule = CareerPathModule;
exports.CareerPathModule = CareerPathModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: career_path_schema_1.CareerPathModel.name, schema: career_path_schema_1.CareerPathSchema }])],
        controllers: [career_path_controller_1.CareerPathController],
        providers: [career_path_service_1.CareerPathService],
    })
], CareerPathModule);
//# sourceMappingURL=career-path.module.js.map