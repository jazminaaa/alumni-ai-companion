import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerPathController } from './career-path.controller';
import { CareerPathService } from './career-path.service';
import { CareerPath, CareerPathModel, CareerPathSchema } from './schemas/career-path.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CareerPathModel.name, schema: CareerPathSchema }])],
  controllers: [CareerPathController],
  providers: [CareerPathService],
})
export class CareerPathModule {}