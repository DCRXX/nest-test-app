import { Field, ID, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";


@InputType()
export class InputProject{
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string

    @Field(() => [String])
    @IsArray()
    link: string[]

    @Field(() => ID, {nullable: true})
    @IsOptional()
    profileId?: string
}