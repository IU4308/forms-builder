import { requireUnblockedUser } from '@/lib/auth-helpers';
import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const mainLoader = getLoader(async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') ?? '';
    if (query) return redirect(`/search/${query}`);
    const currentUser = await requireUnblockedUser();
    return { currentUser, path: url.pathname };
});
