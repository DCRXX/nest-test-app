import { Resolver, Query, Args, ID, Mutation, Int, Directive } from "@nestjs/graphql";
import { ProfileService } from "./profile.service";
import { profileEntity } from "./entity/profile.entity";
import { CreateProfileInput } from "./input/profile.input";


@Resolver('Profile')
export class ProfileResolver {
    constructor(
        private readonly profileService: ProfileService,
    ) { }

    @Query(() => [profileEntity], {name: 'profiles', description: 'Получить все профили'})
    async getProfiles(): Promise<profileEntity[]>{
        return this.profileService.getAllProfile()
    }    

    @Query(() => profileEntity, {name: 'profile', description: 'Получить профиль по ID', nullable: true})
    async getProfile(@Args('id', {type: () => ID}) id: string){
        return this.profileService.getProfile(id)
    }

    @Mutation(() => profileEntity, {name: 'createProfile', description: 'Создать профиль'})
    async createProfile(
        @Args('createProfileInput') dto: CreateProfileInput
    ): Promise<profileEntity>{
        return this.profileService.createProfile(dto)
    }

    @Mutation(() => Int, {name: 'deleteAllProfile', description: 'Удалить все профили'})
    async deleteAllProfile(): Promise<number>{
        return this.profileService.deleteAllProfile()
    }

    @Mutation(() => profileEntity, {name: 'deleteIdProfile', description: 'Удалить профиль по id', nullable: true})
    async deleteId(
        @Args('id', {type: () => ID}) id: string
    ){
        return this.profileService.deleteId(id)
    }

}