import { api } from '@/api/api';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const getCurrentUser = async () => {
    const currentUser = await queryClient.fetchQuery({
        queryKey: ['currentUser'],
        queryFn: () =>
            api
                .get('/auth/user', { withCredentials: true })
                .then((res) => res.data),
    });
    return currentUser;
};

export const getAllUsers = async () => {
    const currentUser = await queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: () =>
            api.get('users', { withCredentials: true }).then((res) => res.data),
    });
    return currentUser;
};
