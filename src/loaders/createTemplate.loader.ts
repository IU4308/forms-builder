import { getLoader } from '@/lib/utils';
import { getCurrentUser, getMetaData } from '@/lib/react-query';
import { redirect } from 'react-router';

export const createTemplateLoader = getLoader(async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) return redirect('/');
    const [topics, tags, users] = await getMetaData();
    return {
        currentUser,
        topics,
        tags,
        users,
        mode: 'template',
    };
});
