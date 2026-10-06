import { Field, ID, ObjectType } from "@nestjs/graphql";
import { level } from "../../generated/prisma/enums";

@ObjectType()
export class SkillsEntity{
    @Field(() => ID)
    id: string

    @Field()
    name: string

    @Field(() => level)
    skillsLevel: level

    @Field(() => ID, {nullable: true})
    profileId?: string | null
}