import axios from 'axios';
import { UserSubmit, UserResponse, User, ArticlesResponse, ProfileResponse, Profile, UserForUpdate } from './models';

export const api = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
});

export function setToken(jwt: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}

export function clearToken() {
    delete api.defaults.headers.common['Authorization'];
}

export async function loginUser(user: UserSubmit): Promise<User> {
        const response = await api.post('/users/login', {
            user,
        });
        return (response.data as UserResponse).user;
}

export async function registerUser(user: UserSubmit): Promise<User> {
    const response = await api.post('/users', {
        user,
    });
    return (response.data as UserResponse).user;
}

export async function getGlobalFeed() {
    const response = await api.get('/articles');
    return response.data as ArticlesResponse;
}

export async function fetchProfile(username: string): Promise<Profile> {
    const response = await api.get('/profile/${username}');
    return (response.data as ProfileResponse).profile;
}

export async function fetchUser(): Promise<User> {
    const response = await api.get('/user');
    return (response.data as UserResponse).user;
}

export async function updateUser(user: UserForUpdate): Promise<User> {
    const response = await api.put('/user',user);
    return (response.data as UserResponse).user;
}
