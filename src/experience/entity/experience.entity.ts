import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class ExperienceEntity{
    @Field(() => ID)
    id: string

    @Field()
    company: string

    @Field()
    position: string

    @Field()
    periodOfEmployment: string

    @Field()
    achievements: string

    @Field(() => ID, {nullable: true})
    profileId?: string

}