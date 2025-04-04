import { api } from '@/api/api';
import { redirect } from 'react-router';

export const register = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        await api.post('/auth/register', Object.fromEntries(formData));
        return redirect('/login');
    } catch (error: any) {
        console.log(error);
        return { error: error.response?.data };
    }
};

export const login = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const response = await api.post(
            '/auth/login',
            Object.fromEntries(formData)
        );
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        return redirect('/');
    } catch (error: any) {
        console.log(error);
        return { error: error.response?.data };
    }
};
