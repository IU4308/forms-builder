import { redirect } from 'react-router';
import { getAllUsers, getCurrentUser } from './react-query';
import { api } from '@/api/api';

export const homeLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (currentUser.isBlocked) return redirect('/login');
        return { currentUser };
    } catch (error: any) {
        console.log(error);
        return { error: error.response?.data };
    }
};

export const adminLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || currentUser.isAdmin === false) return redirect('/');
        const users = await getAllUsers();
        return { currentUser, users };
    } catch (error: any) {
        return { error: error.response?.data };
    }
};

export const logoutLoader = async () => {
    try {
        await api.post('/auth/logout');
        return redirect('/login');
    } catch (error: any) {
        return { error: error.response?.data };
    }
};
