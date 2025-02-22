import { CareerPathService } from './career-path.service';
import { CareerPathDto } from './dto/career-path.dto';
export declare class CareerPathController {
    private readonly careerPathService;
    constructor(careerPathService: CareerPathService);
    create(careerPathDto: CareerPathDto): Promise<import("./schemas/career-path.schema").CareerPath>;
    findByUserId(userId: string): Promise<import("./schemas/career-path.schema").CareerPath[]>;
}
