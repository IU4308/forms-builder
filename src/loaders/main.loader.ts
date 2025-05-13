import { requireUnblockedUser } from '@/lib/auth-helpers';
import { getTemplate } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const mainLoader = getLoader(
    async ({ request, params }: LoaderFunctionArgs) => {
        const url = new URL(request.url);
        const query = url.searchParams.get('query') ?? '';
        if (query && query.trim() !== '')
            return redirect(`/search/${encodeURIComponent(query)}`);
        const { templateId } = params;
        const currentUser = await requireUnblockedUser();
        const template = templateId ? await getTemplate(templateId) : null;
        return { currentUser, template, path: url.pathname };
    }
);
