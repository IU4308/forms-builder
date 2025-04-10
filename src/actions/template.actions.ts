import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';
import { ActionFunctionArgs, redirect } from 'react-router';

export const publishTemplate = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const response = await api.post(
            '/templates',
            Object.fromEntries(formData)
        );
        setFlash(response.data.message);
        return redirect(`/templates/${response.data.templateId}`);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const updateTemplate = async ({
    request,
    params,
}: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        console.log(Object.fromEntries(formData));
        const { templateId } = params;
        console.log(params.templateId);
        const response = await api.put(
            `/templates/${templateId}`,
            Object.fromEntries(formData)
        );
        setFlash(response.data.message);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
