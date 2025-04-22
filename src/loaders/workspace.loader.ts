import { requireUser } from '@/lib/auth-helpers';
import { getWorkspaceData } from '@/lib/react-query';
import { getLoader } from '@/lib/utils';

export const workspaceLoader = getLoader(async () => {
    const currentUser = await requireUser();
    return await getWorkspaceData(currentUser.userId);
});
