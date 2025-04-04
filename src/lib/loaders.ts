import { api } from '@/api/api';
import { redirect } from 'react-router';

export const adminLoader = async () => {
    try {
        const currentUser = (await api.get('/auth/user'))?.data;
        if (!currentUser || currentUser.isAdmin === false) {
            return redirect('/');
        }
        const users = (await api.get('/users'))?.data;
        return { currentUser, users };
    } catch (error: any) {
        return { error: error.response?.data };
    }
};
