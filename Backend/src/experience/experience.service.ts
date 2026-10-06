import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prismaConnect/prisma.service";
import { InputExperience } from "./input/experience.input";


@Injectable()
export class ExperienceService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async getAllExperience() {
        return this.prisma.experience.findMany()
    }

    async getIdExperience(id: string) {
        const existingExperience = await this.prisma.experience.findUnique({ where: { id } })

        if (!existingExperience) {
            throw new NotFoundException(`Запись Опыта с id ${id} не найден`)
        }

        return this.prisma.experience.findUnique({ where: { id } })
    }

    async createExperience(dto: InputExperience) {
        return this.prisma.experience.create({
            data: {
                ...dto
            }
        })
    }

    async deleteIdExperience(id: string) {
        const existingExperience = await this.prisma.experience.findUnique({ where: { id } })
        if (!existingExperience) {
            throw new NotFoundException(`Запись Опыта с id ${id} не найден`)
        }

        return this.prisma.experience.delete({ where: { id } })
    }

    async deleteAllExperience(): Promise<number> {
        const { count } = await this.prisma.experience.deleteMany()
        return count
    }
}