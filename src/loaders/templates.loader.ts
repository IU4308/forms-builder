import {
    getCurrentUser,
    getForm,
    getMetaData,
    getTemplate,
    getTemplateForms,
} from '@/lib/react-query';
import { getLoader, setFlash } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const createTemplateLoader = getLoader(async () => {
    const [topics, tags, users] = await getMetaData();
    return {
        currentUser: await getCurrentUser(),
        topics,
        tags,
        users,
        mode: 'template',
    };
});

export const editTemplateLoader = getLoader(
    async ({ request, params }: LoaderFunctionArgs) => {
        const { templateId } = params;
        const currentUser = await getCurrentUser();
        const template = await getTemplate(templateId);
        if (
            !new URL(request.url).pathname.includes('forms') &&
            template.creatorId !== currentUser.userId &&
            !currentUser.isAdmin
        )
            return redirect(`/templates/${templateId}/forms`);
        const templateForms = await getTemplateForms(templateId);
        return {
            template,
            templateForms,
        };
    }
);

export const formLoader = getLoader(async ({ params }: LoaderFunctionArgs) => {
    const { templateId } = params;
    const template = await getTemplate(templateId);
    if (
        !template.isPublic &&
        !template.allowedIds.includes((await getCurrentUser()).userId)
    ) {
        setFlash('You has no access to this template');
        return redirect('/');
    }
    return {
        mode: 'form',
        canEdit: true,
    };
});

export const filledFormLoader = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        const { formId } = params;
        const template = await getForm(formId);
        const currentUser = await getCurrentUser();
        if (
            template.authorId !== currentUser.userId &&
            template.creatorId !== currentUser.userId &&
            !currentUser.isAdmin
        )
            return redirect('/');
        const canEdit =
            template.authorId === currentUser.userId || currentUser.isAdmin;
        console.log(canEdit);
        return {
            mode: 'form',
            canEdit,
            template,
        };
    }
);
