import { getHomeData } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';

export const homeLoader = getLoader(async () => {
    const [latestTemplates, popularTemplates, templates, tags] =
        await getHomeData();
    console.log(tags);
    return {
        latestTemplates,
        popularTemplates,
        templates,
        tags,
    };
});
