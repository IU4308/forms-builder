import { getLoader } from '@/lib/utils';
import { LoaderFunctionArgs, redirect } from 'react-router';

export const templateRedirector = getLoader(
    async ({ params }: LoaderFunctionArgs) => {
        return redirect(`/templates/${params.templateId}`);
    }
);
