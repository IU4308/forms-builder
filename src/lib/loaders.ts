import { redirect } from 'react-router';
import { getAllUsers, getCurrentUser } from './react-query';

export const adminLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || currentUser.isAdmin === false) {
            return redirect('/');
        }
        const users = await getAllUsers();
        return { currentUser, users };
    } catch (error: any) {
        return { error: error.response?.data };
    }
};

export const homeLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        return { currentUser };
    } catch (error: any) {
        return { error: error.response?.data };
    }
};
