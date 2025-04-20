import { LoaderFunctionArgs, redirect } from 'react-router';
import {
    getAllUsers,
    getCurrentUser,
    getForm,
    getHomeTemplates,
    getSearchResults,
    getTemplate,
    getTemplateData,
    getWorkspaceData,
} from './react-query';
import { api } from '@/api/api';
import { getFlash, mapTagToTemplates, setFlash } from './utils';

export const appLoader = async () => {
    return { flash: getFlash() };
};

export const mainLoader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') ?? '';
    if (query) return redirect(`/search/${query}`);
    try {
        const currentUser = await getCurrentUser();
        if (currentUser.isBlocked) {
            setFlash('Your account has been blocked');
            return redirect('/login');
        }
        return { currentUser, path: url.pathname };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const homeLoader = async () => {
    try {
        const [
            latestTemplates,
            popularTemplates,
            templates,
            tags,
            templatesTags,
        ] = await getHomeTemplates();
        return {
            latestTemplates,
            popularTemplates,
            templates,
            tags,
            tagToTemplates: mapTagToTemplates(templatesTags),
        };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const searchLoader = async ({ params }: LoaderFunctionArgs) => {
    const { query } = params;
    const templates = await getSearchResults(query);
    console.log(templates);
    return { templates, query };
};

export const workspaceLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) return redirect('/');
        return await getWorkspaceData(currentUser.userId);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const adminLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser.isAdmin) return redirect('/');
        const users = await getAllUsers();
        return { currentUser, users };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const templateLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const currentUser = await getCurrentUser();
        const { templateId, formId } = params;
        if ((!templateId || formId) && !currentUser) return redirect('/');
        let mode: 'template' | 'form' = 'template',
            template,
            topics,
            templateForms,
            users,
            tags,
            canEdit = !!currentUser;
        if (formId) {
            mode = 'form';
            template = await getForm(formId);
            canEdit =
                template.creatorId === currentUser.userId ||
                currentUser.isAdmin;
        } else if (templateId) {
            template = await getTemplate(templateId);

            mode =
                template.creatorId === currentUser.userId || currentUser.isAdmin
                    ? 'template'
                    : 'form';
        }
        if (mode === 'template') {
            [templateForms, [topics, tags, users]] =
                await getTemplateData(templateId);
        } else {
            if (
                formId === undefined &&
                !template.isPublic &&
                !template.allowedIds.includes(currentUser.userId)
            ) {
                setFlash('You has no access to this template', 'error');
                return redirect('/');
            }
        }
        return {
            currentUser,
            mode,
            template,
            allowedIds: template?.allowedIds,
            templateTagIds: template?.tagIds,
            templateForms,
            topics,
            tags,
            users,
            canEdit,
        };
    } catch (error: any) {
        console.log(error);
        if (error.status === 404) throw new Error('Page Not Found');
        throw new Error('Server error');
    }
};

export const logoutLoader = async () => {
    try {
        await api.post('/auth/logout');
        return redirect('/login');
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
