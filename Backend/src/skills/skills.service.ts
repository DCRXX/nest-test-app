import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prismaConnect/prisma.service";
import { SkillsEntity } from "./entity/skills.entity";
import { InputSkills } from './input/skills.input'


@Injectable()
export class SkillsService {
    constructor(
        private readonly prisma: PrismaService

    ) { }

    async getAllSkills() {
        return this.prisma.skills.findMany()
    }

    async getIdSkills(id: string) {
        const existingSkill = await this.prisma.skills.findUnique({ where: { id } })

        if (!existingSkill) {
            throw new NotFoundException(`Навыка с id: ${id} не найден`)
        }

        return this.prisma.skills.findUnique({ where: { id } })
    }

    async createSkills(dto: InputSkills) {
        return this.prisma.skills.create({
            data: {
                ...dto
            }
        })
    }

    async deleteAllSkills(): Promise<number> {
        const { count } = await this.prisma.skills.deleteMany()
        return count
    }

    async deleteIdSkills(id: string) {
        const existingSkill = await this.prisma.skills.findUnique({ where: { id } })
        if (!existingSkill) {
            throw new NotFoundException(`Навыка с id: ${id} не найден`)
        }

        return this.prisma.skills.delete({ where: { id } })
    }
}