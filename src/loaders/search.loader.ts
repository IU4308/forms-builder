import { getSearchResults } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs } from 'react-router';

export const searchLoader = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        const { query } = params;
        const templates = await getSearchResults(query);
        return { templates, query };
    }
);
