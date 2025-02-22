import { Model } from 'mongoose';
import { CareerPath } from './schemas/career-path.schema';
import { CareerPathDto } from './dto/career-path.dto';
export declare class CareerPathService {
    private careerPathModel;
    constructor(careerPathModel: Model<CareerPath>);
    create(careerPathDto: CareerPathDto): Promise<CareerPath>;
    findByUserId(userId: string): Promise<CareerPath[]>;
}
