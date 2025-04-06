import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';
import { redirect } from 'react-router';

export const register = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        await api.post('/auth/register', Object.fromEntries(formData));
        setFlash('An account has been created successfully');
        return redirect('/login');
    } catch (error: any) {
        return { error: error.response?.data };
    }
};

export const login = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        await api.post('/auth/login', Object.fromEntries(formData));
        setFlash('You have logged in successfully');
        return redirect('/');
    } catch (error: any) {
        console.log(error);
        return { error: error.response?.data };
    }
};
