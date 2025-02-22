import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CareerPathModule } from './career-path/career-path.module';
import { EventModule } from './event/event.module';
import { KnowledgeHubModule } from './knowledge-hub/knowledge-hub.module';
import { JobOpportunityModule } from './job-opportunity/job-opportunity.module';
import { MentorshipModule } from './mentorship/mentorship.module';
import { EngagementScoreModule } from './engagement-score/engagement-score.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    CareerPathModule,
    EventModule,
    KnowledgeHubModule,
    JobOpportunityModule,
    MentorshipModule,
    EngagementScoreModule,
    CourseModule,
  ],
})
export class AppModule {}