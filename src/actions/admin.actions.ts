import { api } from '@/api/api';
import { redirect } from 'react-router';

export const adminAction = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const selectedIds =
            (formData.get('allUserIds') as string)?.split(',') ??
            formData.getAll('userId');
        console.log(formData.get('action'));
        const response = await api.post(
            `/admin/${formData.get('action')}`,
            selectedIds
        );
        console.log(response.data);
        redirect('/admin');
    } catch (error: any) {
        console.log(error);
    }
};
