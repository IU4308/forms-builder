import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';
import { ActionFunctionArgs } from 'react-router';

export const submitForm = async ({ request, params }: ActionFunctionArgs) => {
    console.log('submti form action');
    try {
        const formData = await request.formData();
        const { templateId } = params;
        console.log(Object.fromEntries(formData));
        const response = await api.post(`/forms`, formData);
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

export const updateForm = async ({ request, params }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const { formId } = params;
        console.log(Object.fromEntries(formData));
        const response = await api.put(
            `/forms/${formId}`,
            Object.fromEntries(formData)
        );
        setFlash(response.data.message);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
