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

export const getTemplate = async (templateId: string | undefined) => {
    if (templateId === undefined) return null;
    const template = await queryClient.fetchQuery({
        queryKey: ['template'],
        queryFn: () =>
            api.get(`/templates/${templateId}`).then((res) => res.data),
    });
    return template;
};

export const getForm = async (formId: string | undefined) => {
    if (formId === undefined) return null;
    const form = await queryClient.fetchQuery({
        queryKey: ['form'],
        queryFn: () => api.get(`/forms/${formId}`).then((res) => res.data),
    });
    return form;
};

export const getUserTemplates = async (userId: string) => {
    const templates = await queryClient.fetchQuery({
        queryKey: ['templates'],
        queryFn: () =>
            api.get(`/templates/users/${userId}`).then((res) => res.data),
    });
    return templates;
};
