import { Module } from '@nestjs/common';
import { PrismaModule } from './prismaConnect/prisma.module';
import { Directive, GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ProfileModule } from './profile/profile.module';
import { SkillsModule } from './skills/skills.module';
import { DirectiveLocation, GraphQLDirective, GraphQLString } from 'graphql';
import { ExperienceModule } from './experience/experience.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/shema.gql'),
      graphiql: true
    }),
    PrismaModule, ProfileModule, SkillsModule, ExperienceModule, ProjectModule
  ],
  providers: [AppResolver],
})
export class AppModule { }
