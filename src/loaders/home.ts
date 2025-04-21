import { getHomeData } from '@/lib/react-query';
import { getLoader, mapTagToTemplates } from '@/lib/utils';

export const homeLoader = getLoader(async () => {
    const [latestTemplates, popularTemplates, templates, tags, templatesTags] =
        await getHomeData();
    return {
        latestTemplates,
        popularTemplates,
        templates,
        tags,
        tagToTemplates: mapTagToTemplates(templatesTags),
    };
});
