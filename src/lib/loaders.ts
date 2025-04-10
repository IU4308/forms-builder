import { LoaderFunctionArgs, redirect } from 'react-router';
import {
    getAllUsers,
    getCurrentUser,
    getTemplate,
    getUserTemplates,
} from './react-query';
import { api } from '@/api/api';
import { getFlash, getQuestions, setFlash } from './utils';

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
        return { templates };
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const adminLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || currentUser.isAdmin === false) return redirect('/');
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
        if (!currentUser) return redirect('/');

        const { templateId } = params;
        const template = await getTemplate(templateId);
        // const form = await getForm(formId);
        let mode = 'template';
        if (templateId !== undefined) {
            mode =
                template.creatorId === currentUser.userId || currentUser.isAdmin
                    ? 'template'
                    : 'form';
        }
        const templateQuestions = getQuestions(template);
        return {
            currentUser,
            mode,
            template,
            templateQuestions,
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
