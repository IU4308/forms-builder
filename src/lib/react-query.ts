import { api } from '@/api/api';
import { QueryClient } from '@tanstack/react-query';
import { CurrentUser, User } from './definitions';

export const queryClient = new QueryClient();

export const getCurrentUser = async (): Promise<CurrentUser> => {
    const currentUser = await queryClient.fetchQuery({
        queryKey: ['currentUser'],
        queryFn: () => api.get('/auth/user').then((res) => res.data),
    });
    return currentUser;
};

export const getAllUsers = async (): Promise<User[]> => {
    const users = await queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: () => api.get('users').then((res) => res.data),
    });
    return users;
};
