import { Field, ID, InputType, registerEnumType } from "@nestjs/graphql";
import { level } from "../../generated/prisma/enums";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

registerEnumType(level, {
    name: 'SkillsLevel',
    description: 'Уровень владение навыком'
})

@InputType()
export class InputSkills{
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string

    @Field(() => level)
    @IsString()
    @IsNotEmpty()
    skillsLevel: level

    @Field(() => ID, {nullable: true})
    @IsOptional()
    profileId?: string
}