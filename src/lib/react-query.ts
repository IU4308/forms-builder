import { api } from '@/api/api';
import { QueryClient } from '@tanstack/react-query';
import { CurrentUser, User } from './definitions';
import { some, join } from 'lodash';

export const queryClient = new QueryClient();

export const fetchData = async (...args: (string | undefined)[]) => {
    if (some(args, (arg) => arg === undefined)) return null;
    return await queryClient.fetchQuery({
        queryKey: [join(args, '-')],
        queryFn: () => api.get(join(args, '/')).then((res) => res.data),
    });
};

export const getTemplateData = async (templateId?: string | undefined) => {
    return await Promise.all([
        await getTemplateForms(templateId),
        await getMetaData(),
    ]);
};

export const getMetaData = () => fetchData('templates', 'meta');

export const getWorkspaceData = (userId: string) =>
    fetchData('templates', 'users', userId);

export const getHomeData = () => fetchData('');
export const getLatestTemplates = () => fetchData('templates', 'latest');
export const getPopularTemplates = () => fetchData('templates', 'popular');

export const getCurrentUser = (): Promise<CurrentUser> =>
    fetchData('auth', 'user');

export const getAllUsers = (): Promise<User[]> => fetchData('users');

export const getTemplate = (templateId: string | undefined) =>
    fetchData('templates', templateId);

export const getTopics = () => fetchData('templates', 'topics');

export const getTags = () => fetchData('templates', 'tags');

export const getTemplateForms = (templateId: string | undefined) =>
    fetchData('templates', templateId, 'forms');

export const getTemplateTags = (templateId: string | undefined) =>
    fetchData('templates', templateId, 'tags');

export const getForm = (formId: string | undefined) =>
    fetchData('forms', formId);

export const getUserTemplates = (userId: string) =>
    fetchData('templates', 'users', userId);

export const getUserForms = (userId: string) =>
    fetchData('forms', 'users', userId);

export const getSearchResults = (query: string | undefined) =>
    fetchData('', `search?q=${query}`);
