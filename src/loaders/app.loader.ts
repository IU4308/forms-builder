import { getFlash } from '@/lib/utils';

export const appLoader = async () => {
    return { flash: getFlash() };
};
