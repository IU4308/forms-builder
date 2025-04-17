import { getSearchResults } from '@/lib/react-query';
import { ActionFunctionArgs } from 'react-router';

export const search = async ({ request }: ActionFunctionArgs) => {
    console.log('search action');
    const query = new URL(request.url).searchParams.get('query') ?? '';
    try {
        // const templates = await getSearchResults(query);
        // console.log(templates);
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
