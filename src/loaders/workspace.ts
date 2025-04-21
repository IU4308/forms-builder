import { getCurrentUser, getWorkspaceData } from '@/lib/react-query';
import { redirect } from 'react-router';

export const workspaceLoader = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) return redirect('/');
        return await getWorkspaceData(currentUser.userId);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
