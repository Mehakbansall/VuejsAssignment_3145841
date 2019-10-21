import {VuexModule, getModule, Module, MutationAction, Action } from 'vuex-module-decorators';
import store from '@/store';
import { User, Profile, UserSubmit, UserForUpdate, UserRegister } from '../models';
import { loginUser, registerUser,fetchProfile, updateUser, setToken, fetchUser } from '../api';

@Module({
    namespaced: true,
    name: 'users,',
    store,
    dynamic: true,
})

class UsersModule extends VuexModule {
    user: User | null = null;
    profile: Profile | null = null;

    get username() {
        return this.user && this.user.username || null;
    }

    @MutationAction
    async login(userSubmit: UserSubmit) {
            const user  = await loginUser(userSubmit);
            setToken(user.token);
            return {user}; 
    }

    @MutationAction
    async register(userSubmit: UserRegister) {
            const user  = await registerUser(userSubmit);
            setToken(user.token);
            return {user}; 
    }

    @MutationAction
    async loadProfile(username: string) {
        const profile  = await fetchProfile(username);
        return {profile};
    }

    @MutationAction
    async loadUser() {
        const user  = await fetchUser();
        return {user};
    }

    @MutationAction
    async updateSelfProfile(userUpdateFields: UserForUpdate) {
        const user = await updateUser(userUpdateFields);
        return {user};
    }
}

export default getModule(UsersModule);
