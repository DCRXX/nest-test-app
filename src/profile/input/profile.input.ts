import { Field, InputType } from "@nestjs/graphql";
import {ArrayNotEmpty, IsArray, IsNotEmpty, IsString, IsUrl, IsOptional, ValidateNested} from 'class-validator'
import { Type } from 'class-transformer';
import { InputSkills } from "../../skills/input/skills.input";
import { InputExperience } from "../../experience/input/experience.input";
import { InputProject } from "../../project/input/project.input";


@InputType()
export class CreateProfileInput{
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string

    @Field()
    @IsString()
    @IsNotEmpty()
    description: string

    @Field(() => [String])
    @IsArray()
    @ArrayNotEmpty()
    @IsUrl({}, {each: true})
    links: string[]

    @Field(() => [InputSkills], {nullable: true})
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => InputSkills)
    skills?: InputSkills[]

    @Field(() => [InputExperience], {nullable: true})
    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => InputExperience)
    experience?: InputExperience[]

    @Field(() => [InputProject], {nullable: true})
    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => InputProject)
    project?: InputProject[]
}