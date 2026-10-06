import { Args, ID, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ExperienceService } from "./experience.service";
import { ExperienceEntity } from "./entity/experience.entity";
import { InputExperience } from "./input/experience.input";


@Resolver('Experience')
export class ExperienceResolver {
    constructor(
        private readonly ExprerienceService: ExperienceService
    ) { }

    @Query(() => [ExperienceEntity], {name: 'getAllExperience', description: 'Получить все записи опыта'})
    async getAllExperience(){
        return this.ExprerienceService.getAllExperience()
    }

    @Query(() => ExperienceEntity, {name: 'getIdExperience', description: 'Получить запись опыта по id', nullable: true})
    async getIdExperience(
        @Args('id', {type: () => ID}) id: string
    ){
        return this.ExprerienceService.getIdExperience(id)
    }

    @Mutation(() => ExperienceEntity, {name: 'createExperience', description: 'Создать запись опыта'})
    async createExperience(
        @Args('createExperience') dto: InputExperience
    ) {
        return this.ExprerienceService.createExperience(dto)
    }

    @Mutation(() => ExperienceEntity, {name: 'deleteIdExperience', description: 'Удалить запись опыта по id', nullable: true})
    async deleteIdExperience(
        @Args('id', {type: () => ID}) id: string
    ){
        return this.ExprerienceService.deleteIdExperience(id)
    }

    @Mutation(() => Int, {name: 'deleteAllExperience', description: 'Удалить все записи опыта'})
    async deleteAllExperience(): Promise<number>{
        return this.ExprerienceService.deleteAllExperience()
    }

}