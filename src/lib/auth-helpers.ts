import { redirect } from 'react-router';
import { setFlash } from './utils';
import { getCurrentUser } from './react-query';

export async function requireUser(redirectTo: string = '/login') {
    const user = await getCurrentUser();
    if (!user) throw redirect(redirectTo);
    return user;
}

export async function requireUnblockedUser(redirectTo: string = '/login') {
    const user = await requireUser(redirectTo);
    if (user.isBlocked) {
        setFlash('Your account has been blocked');
        throw redirect(redirectTo);
    }
    return user;
}

export async function requireAdminUser(redirectTo: string = '/') {
    const user = await requireUser(redirectTo);
    if (!user.isAdmin) throw redirect(redirectTo);
    return user;
}
