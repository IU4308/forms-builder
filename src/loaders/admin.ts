import { requireAdminUser } from '@/lib/auth-helpers';
import { getAllUsers } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';

export const adminLoader = getLoader(async () => {
    return {
        currentUser: await requireAdminUser(),
        users: await getAllUsers(),
    };
});
