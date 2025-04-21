import { api } from '@/api/api';
import { redirect } from 'react-router';

export const logoutLoader = async () => {
    try {
        await api.post('/auth/logout');
        return redirect('/login');
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
