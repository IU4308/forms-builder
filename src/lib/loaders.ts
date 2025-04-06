import { redirect } from 'react-router';
import { getAllUsers, getCurrentUser } from './react-query';
import { api } from '@/api/api';
import { getFlash, setFlash } from './utils';

export const homeLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (currentUser.isBlocked) {
            setFlash('Your account has been blocked', 'error');
            return redirect('/login');
        }
        return { currentUser, flash: getFlash() };
    } catch (error: any) {
        console.log(error);
        return { error: error.response?.data };
    }
};

export const loginLoader = async () => {
    return { flash: getFlash() };
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
