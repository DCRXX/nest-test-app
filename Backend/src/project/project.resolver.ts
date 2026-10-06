import { Args, ID, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProjectService } from "./project.service";
import { ProjectEntity } from "./entity/project.entity";
import { InputProject } from "./input/project.input";


@Resolver('project')
export class ProjectResolver{
    constructor(
        private readonly ProjectService: ProjectService
    ) {}

    @Query(() => [ProjectEntity], {name: 'getAllProject', description: 'Получить все профили'})
    async getAllProject(){
        return this.ProjectService.getAllProject()
    }

    @Query(() => ProjectEntity, {name: 'getIdProject', description: 'Получить профиль по id', nullable: true})
    async getIdProject(
        @Args('id', {type: () => ID}) id: string
    ){
        return this.ProjectService.getIdProject(id)
    }

    @Mutation(() => ProjectEntity, {name: 'createProject', description: 'Создать профиль'})
    async createProject(
        @Args('createProject') dto: InputProject
    ) {
        return this.ProjectService.createProject(dto)
    }

    @Mutation(() => ProjectEntity, {name: 'deleteIdProject', description: 'Удалить Профиль по id', nullable: true})
    async deleteIdProject(
        @Args('id', {type: () => ID}) id: string
    ) {
        return this.ProjectService.deleteIdProject(id)
    }

    @Mutation(() => Int, {name: 'deleteAllProject', description: 'Удалить все профили'})
    async deleteAllProject(): Promise<number>{
        return this.ProjectService.deleteAllProject()
    }
}