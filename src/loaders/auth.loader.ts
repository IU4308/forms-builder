import { getLoader } from '@/lib/utils';

export const authLoader = getLoader(async () => {
    return {
        currentUser: null,
        template: null,
    };
});
