import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';
import { redirect } from 'react-router';

export const adminAction = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const selectedIds =
            (formData.get('allUserIds') as string)?.split(',') ??
            formData.getAll('userId');
        const response = await api.post(
            `/admin/${formData.get('action')}`,
            selectedIds
        );
        setFlash(response.data.message);
        // console.log(response.data);
        redirect('/admin');
    } catch (error: any) {
        console.log(error);
    }
};
