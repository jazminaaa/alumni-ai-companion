import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CareerPath, CareerPathModel } from './schemas/career-path.schema';
import { CareerPathDto } from './dto/career-path.dto';

@Injectable()
export class CareerPathService {
  constructor(@InjectModel(CareerPathModel.name) private careerPathModel: Model<CareerPath>) {}

  async create(careerPathDto: CareerPathDto): Promise<CareerPath> {
    const createdCareerPath = new this.careerPathModel(careerPathDto);
    return createdCareerPath.save();
  }

  async findByUserId(userId: string): Promise<CareerPath[]> {
    return this.careerPathModel.find({ userId }).exec();
  }
}