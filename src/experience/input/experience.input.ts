import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


@InputType()
export class InputExperience{
    @Field()
    @IsString()
    @IsNotEmpty()
    company: string

    @Field()
    @IsString()
    @IsNotEmpty()
    position: string

    @Field()
    @IsString()
    @IsNotEmpty()
    periodOfEmployment: string

    @Field()
    @IsString()
    @IsNotEmpty()
    achievements: string

    @Field(() => ID, {nullable: true})
    @IsOptional()
    profileId?: string
}