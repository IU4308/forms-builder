import {
    getCurrentUser,
    getTemplate,
    getTemplateData,
} from '@/lib/react-query';
import { getLoader, groupResults } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const templateLoader = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        const { templateId } = params;
        const currentUser = await getCurrentUser();
        const template = await getTemplate(templateId);
        if (template.creatorId !== currentUser?.userId && !currentUser?.isAdmin)
            return redirect(`/templates/${templateId}/forms`);

        const [[templateForms, aggregatedResults], [topics, tags, users]] =
            await getTemplateData(templateId);
        return {
            currentUser,
            template,
            templateForms,
            results: groupResults(aggregatedResults),
            topics,
            tags,
            users,
            mode: 'template',
        };
    }
);
