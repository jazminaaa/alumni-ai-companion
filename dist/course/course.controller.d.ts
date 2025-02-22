import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    create(createCourseDto: CreateCourseDto): Promise<import("./schemas/course.schema").Course>;
    findAll(): Promise<import("./schemas/course.schema").Course[]>;
    findById(id: string): Promise<import("./schemas/course.schema").Course>;
}
