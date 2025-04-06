import { redirect } from 'react-router';
import { getAllUsers, getCurrentUser } from './react-query';
import { api } from '@/api/api';

export const homeLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (currentUser.isBlocked) {
            sessionStorage.setItem(
                'flash',
                'ERROR|Your account has been blocked'
            );
            return redirect('/login');
        }
        return { currentUser };
    } catch (error: any) {
        console.log(error);
        return { error: error.response?.data };
    }
};

export const loginLoader = async () => {
    try {
        const flash = sessionStorage.getItem('flash');
        const [messageType, message] = flash?.split('|', 2);
        sessionStorage.removeItem('flash');
        return { message, messageType };
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
