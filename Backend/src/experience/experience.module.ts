import { Module } from "@nestjs/common";
import { PrismaModule } from "../prismaConnect/prisma.module";
import { ExperienceResolver } from "./experience.resolver";
import { ExperienceService } from "./experience.service";


@Module({
    imports: [PrismaModule],
    providers: [ExperienceResolver, ExperienceService]
})
export class ExperienceModule { }