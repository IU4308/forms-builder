import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';

export const templateAction = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const response = await api.post(
            '/templates',
            Object.fromEntries(formData)
        );
        console.log(response);
        setFlash(response.data.message);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
