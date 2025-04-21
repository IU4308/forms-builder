import { getSearchResults } from '@/lib/react-query';
import { LoaderFunctionArgs } from 'react-router';

export const searchLoader = async ({ params }: LoaderFunctionArgs) => {
    const { query } = params;
    const templates = await getSearchResults(query);
    console.log(templates);
    return { templates, query };
};
