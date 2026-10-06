import { Args, ID, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SkillsService } from "./skills.service";
import { InputSkills } from "./input/skills.input";
import { SkillsEntity } from "./entity/skills.entity";
import { Body } from "@nestjs/common";


@Resolver('Skills')
export class SkillsResolver{
    constructor(
        private readonly SkillsService: SkillsService
    ) {}

    @Query(() => [SkillsEntity], {name: 'getAllSkills', description: 'Получить все навыки'})
    async getAllSkills(){
        return this.SkillsService.getAllSkills()
    }

    @Query(() => SkillsEntity, {name: 'getIdskills', description: 'Получить навык по id', nullable: true})
    async getIdSkills(@Args('id', {type: () => ID}) id:string){
        return this.SkillsService.getIdSkills(id)
    }

    @Mutation(() => SkillsEntity, {name: 'createSkills', description: 'Создать навык'})
    async createSkills(
        @Args('createskills') dto: InputSkills
    ){
        return this.SkillsService.createSkills(dto)
    }

    @Mutation(() => Int, {name: 'deleteAllSkills', description:'Удалить все навыки'})
    async deleteAllSkills(): Promise<number>{
        return this.SkillsService.deleteAllSkills()
    }

    @Mutation(() => SkillsEntity, {name: 'deleteIdSkills', description: 'Удалить навык по Id', nullable: true})
    async deleteIdSkills(
        @Args('id', {type: () => ID}) id: string
    ){
        return this.SkillsService.deleteIdSkills(id)
    }

}