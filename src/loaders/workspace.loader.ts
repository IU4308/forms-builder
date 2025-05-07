import { requireUser } from '@/lib/auth-helpers';
import { getUser, getWorkspaceData } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const workspaceLoader = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        const currentUser = await requireUser();
        if (currentUser.userId !== params.userId! && !currentUser.isAdmin)
            return redirect('/');
        const [templates, forms] = await getWorkspaceData(params.userId!);
        return {
            currentUser,
            templates,
            forms,
            owner: currentUser.isAdmin ? await getUser(params.userId!) : null,
        };
    }
);
