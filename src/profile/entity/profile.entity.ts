import { Field, ID, ObjectType } from "@nestjs/graphql";
import { SkillsEntity } from "../../skills/entity/skills.entity";
import { IsArray, IsOptional, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { InputSkills } from "../../skills/input/skills.input";
import { ExperienceEntity } from "../../experience/entity/experience.entity";
import { ProjectEntity } from "../../project/entity/project.entity";


@ObjectType()
export class profileEntity{
    @Field(() => ID)
    id: string

    @Field()
    name: string

    @Field()
    description: string

    @Field(() => [String])
    links: string[]

    @Field(() => [SkillsEntity], {nullable: true})
    skills?: SkillsEntity[]

    @Field(() => [ExperienceEntity], {nullable: true})
    experience?: ExperienceEntity[]

    @Field(() => [ProjectEntity], {nullable: true})
    project?: ProjectEntity[]

}