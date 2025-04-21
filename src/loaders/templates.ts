import {
    getCurrentUser,
    getForm,
    getTemplate,
    getTemplateData,
} from '@/lib/react-query';
import { setFlash } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

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
