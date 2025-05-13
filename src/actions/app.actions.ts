import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';

export const report = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const response = await api.post('/users', formData);
        setFlash(response?.data.message);
        return { response };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
