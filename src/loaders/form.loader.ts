import { getCurrentUser, getTemplate } from '@/lib/react-query';
import { getLoader, setFlash } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const formLoader = getLoader(async ({ params }: LoaderFunctionArgs) => {
    const { templateId } = params;
    const template = await getTemplate(templateId);
    const currentUser = await getCurrentUser();
    if (
        !template.isPublic &&
        !template.allowedIds.includes(currentUser.userId)
    ) {
        setFlash('You has no access to this template');
        return redirect('/');
    }
    return {
        mode: 'form',
        canEdit: !!currentUser,
    };
});
