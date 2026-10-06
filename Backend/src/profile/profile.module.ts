import { Module } from "@nestjs/common";
import { ProfileResolver } from "./profile.resolver";
import { ProfileService } from "./profile.service";
import { PrismaModule } from "../prismaConnect/prisma.module";


@Module({
    imports: [PrismaModule],
    providers: [ProfileService, ProfileResolver]
})
export class ProfileModule { }