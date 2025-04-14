import { LoaderFunctionArgs, redirect } from 'react-router';
import {
    getAllUsers,
    getCurrentUser,
    getForm,
    getTemplate,
    getTemplateForms,
    getTopics,
    getUserForms,
    getUserTemplates,
} from './react-query';
import { api } from '@/api/api';
import { getFlash, setFlash } from './utils';

export const appLoader = async () => {
    return { flash: getFlash() };
};

export const homeLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (currentUser.isBlocked) {
            setFlash('Your account has been blocked', 'error');
            return redirect('/login');
        }
        return { currentUser };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const workspaceLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) return redirect('/');
        const templates = await getUserTemplates(currentUser.userId);
        const forms = await getUserForms(currentUser.userId);
        return { templates, forms };
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
            topics = await getTopics();
            templateForms = await getTemplateForms(templateId);
        }
        return {
            currentUser,
            mode,
            template,
            templateForms,
            topics,
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
