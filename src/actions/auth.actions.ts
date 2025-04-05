import { api } from '@/api/api';
import { redirect } from 'react-router';

export const register = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        await api.post('/auth/register', Object.fromEntries(formData));
        return redirect('/login');
    } catch (error: any) {
        return { error: error.response?.data };
    }
};

export const login = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        await api.post('/auth/login', Object.fromEntries(formData));
        return redirect('/');
    } catch (error: any) {
        console.log(error);
        return { error: error.response?.data };
    }
};

export const logout = async () => {
    console.log('logout');
    try {
        const response = await api.post('/auth/logout');
        console.log(response);
        return redirect('/');
    } catch (error: any) {
        return { error: error.response?.data };
    }
};
