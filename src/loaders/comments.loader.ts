import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const commentsLoader = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        console.log('comments loader');
        return redirect(`/templates/${params.templateId}`);
    }
);
