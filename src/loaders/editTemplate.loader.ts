import {
    getCurrentUser,
    getTemplate,
    getTemplateForms,
} from '@/lib/react-query';
import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

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
