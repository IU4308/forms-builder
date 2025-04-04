import { api } from '@/api/api';
import { redirect } from 'react-router';

export const adminLoader = async () => {
    try {
        console.log('Admin loader');
        const response = await api.get('/auth/users');
        const user = response.data.user;
        if (user.isAdmin === false) {
            return redirect('/');
        }
        return { user };
    } catch (error: any) {
        // console.log(error);
        return { error: error.response?.data };
    }
};
