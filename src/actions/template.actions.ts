import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';
import { redirect } from 'react-router';

export const templateAction = async ({ request }: { request: Request }) => {
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
