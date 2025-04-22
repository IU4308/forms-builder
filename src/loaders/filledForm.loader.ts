import { getCurrentUser, getForm } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

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
