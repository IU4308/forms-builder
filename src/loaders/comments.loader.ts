import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const commentsLoader = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        return redirect(`/templates/${params.templateId}`);
    }
);
