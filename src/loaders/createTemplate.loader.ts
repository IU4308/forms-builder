import { getLoader } from '@/lib/utils';
import { getCurrentUser, getMetaData } from '@/lib/react-query';

export const createTemplateLoader = getLoader(async () => {
    const [topics, tags, users] = await getMetaData();
    return {
        currentUser: await getCurrentUser(),
        topics,
        tags,
        users,
        mode: 'template',
    };
});
