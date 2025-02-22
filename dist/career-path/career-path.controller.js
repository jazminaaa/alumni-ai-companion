"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerPathController = void 0;
const common_1 = require("@nestjs/common");
const career_path_service_1 = require("./career-path.service");
const career_path_dto_1 = require("./dto/career-path.dto");
let CareerPathController = class CareerPathController {
    constructor(careerPathService) {
        this.careerPathService = careerPathService;
    }
    async create(careerPathDto) {
        return this.careerPathService.create(careerPathDto);
    }
    async findByUserId(userId) {
        return this.careerPathService.findByUserId(userId);
    }
};
exports.CareerPathController = CareerPathController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [career_path_dto_1.CareerPathDto]),
    __metadata("design:returntype", Promise)
], CareerPathController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerPathController.prototype, "findByUserId", null);
exports.CareerPathController = CareerPathController = __decorate([
    (0, common_1.Controller)('career-paths'),
    __metadata("design:paramtypes", [career_path_service_1.CareerPathService])
], CareerPathController);
//# sourceMappingURL=career-path.controller.js.map