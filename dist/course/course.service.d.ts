import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CourseService {
    private courseModel;
    constructor(courseModel: Model<Course>);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(): Promise<Course[]>;
    findById(id: string): Promise<Course>;
}
