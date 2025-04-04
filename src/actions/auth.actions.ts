import { api } from '@/api/api';
import { redirect } from 'react-router';

export const register = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        await api.post('/auth/users', Object.fromEntries(formData));
        return redirect('/login');
    } catch (error: any) {
        console.log(error.response?.data);
        return { error: error.response?.data };
    }
};
