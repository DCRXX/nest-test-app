import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prismaConnect/prisma.service";
import { Prisma } from "../generated/prisma/client";
import { InputProject } from "./input/project.input";


@Injectable()
export class ProjectService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async getAllProject() {
        return this.prisma.project.findMany()
    }

    async getIdProject(id: string) {
        try {
            return await this.prisma.project.findUnique({ where: { id } })
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
                throw new NotFoundException(`Проект с id: ${id} не найден`)
            }
            throw err
        }
    }

    async createProject(dto: InputProject) {
        return this.prisma.project.create({
            data: {
                ...dto
            }
        })
    }

    async deleteIdProject(id: string) {
        try {
            return await this.prisma.project.delete({ where: { id } })
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
                throw new NotFoundException(`Проект с id: ${id} не найден`)
            }
            throw err
        }
    }


    async deleteAllProject(): Promise<number> {
        const { count } = await this.prisma.project.deleteMany()
        return count
    }
}