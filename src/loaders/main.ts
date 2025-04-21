import { getCurrentUser } from '@/lib/react-query';
import { setFlash } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const mainLoader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') ?? '';
    if (query) return redirect(`/search/${query}`);
    try {
        const currentUser = await getCurrentUser();
        if (currentUser.isBlocked) {
            setFlash('Your account has been blocked');
            return redirect('/login');
        }
        return { currentUser, path: url.pathname };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
