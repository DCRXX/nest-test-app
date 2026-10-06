import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prismaConnect/prisma.service";
import { CreateProfileInput } from "./input/profile.input";
import { create } from "domain";


@Injectable()
export class ProfileService {
    private readonly logger = new Logger()
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async getAllProfile() {
        return this.prisma.profile.findMany({
            include:{
                skills: true,
                experience: true,
                project: true
            }
        })
    }

    async getProfile(id: string) {
        const existingProfile = await this.prisma.profile.findUnique({where: {id}})

        if(!existingProfile){
            throw new NotFoundException(`Профиль с ID "${id}" не найден`)
        }
        
        return this.prisma.profile.findUnique({ where: { id } })
    }

    async createProfile(dto: CreateProfileInput) {
        const {
            skills, 
            experience, 
            project,
            ...profileData
        } = dto
        return this.prisma.profile.create({
            data: {
                ...profileData,
                skills: skills && skills.length > 0 ? {
                    create: skills
                } : undefined,
                experience: experience && experience.length > 0 ? {
                    create: experience
                } : undefined,
                project: project && project.length > 0 ? {
                    create: project
                } : undefined
            },
            include: {
                skills: true,
                experience: true,
                project: true
            }
        })
    }

    async deleteAllProfile(): Promise<number> {
        const { count } = await this.prisma.profile.deleteMany()
        return count    
    }

    async deleteId(id: string) {
        const existingProfile = await this.prisma.profile.findUnique({where: {id}})

        if(!existingProfile){
            throw new NotFoundException(`Профиль с ID "${id}" не найден`)
        }

        return this.prisma.profile.delete({ where: { id } })
    }
}