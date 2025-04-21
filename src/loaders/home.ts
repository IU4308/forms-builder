import { getHomeTemplates } from '@/lib/react-query';
import { mapTagToTemplates } from '@/lib/utils';

export const homeLoader = async () => {
    try {
        const [
            latestTemplates,
            popularTemplates,
            templates,
            tags,
            templatesTags,
        ] = await getHomeTemplates();
        return {
            latestTemplates,
            popularTemplates,
            templates,
            tags,
            tagToTemplates: mapTagToTemplates(templatesTags),
        };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
