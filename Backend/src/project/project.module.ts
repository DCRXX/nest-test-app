import { Module } from "@nestjs/common";
import { PrismaModule } from "../prismaConnect/prisma.module";
import { ProjectResolver } from "./project.resolver";
import { ProjectService } from "./project.service";


@Module({
    imports: [PrismaModule],
    providers: [ProjectResolver, ProjectService]
})
export class ProjectModule { }