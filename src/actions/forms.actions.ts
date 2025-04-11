import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';
import { ActionFunctionArgs } from 'react-router';

export const submit = async ({ request, params }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const { templateId } = params;
        const response = await api.post(`/forms`, Object.fromEntries(formData));
        setFlash(response.data.message);
        return {
            formResponse: {
                formId: response.data.formId,
                templateId,
            },
        };
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
