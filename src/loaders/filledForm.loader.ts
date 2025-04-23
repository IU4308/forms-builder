import { getCurrentUser, getForm } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const filledFormLoader = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        const { formId } = params;
        const form = await getForm(formId);
        const currentUser = await getCurrentUser();
        if (
            form.authorId !== currentUser.userId &&
            form.creatorId !== currentUser.userId &&
            !currentUser.isAdmin
        )
            return redirect('/');
        const canEdit =
            form.authorId === currentUser.userId || currentUser.isAdmin;
        return {
            currentUser,
            mode: 'form',
            canEdit,
            template: form,
        };
    }
);
