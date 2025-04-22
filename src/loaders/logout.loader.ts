import { api } from '@/api/api';
import { getLoader } from '@/lib/utils';
import { redirect } from 'react-router';

export const logoutLoader = getLoader(async () => {
    await api.post('/auth/logout');
    return redirect('/login');
});
