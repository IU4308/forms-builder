import { getAllUsers, getCurrentUser } from '@/lib/react-query';
import { redirect } from 'react-router';

export const adminLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser.isAdmin) return redirect('/');
        const users = await getAllUsers();
        return { currentUser, users };
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
