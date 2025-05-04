import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';

export const adminAction = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const selectedIds =
            (formData.get('allIds') as string)?.split(',') ??
            formData.getAll('id');
        const response = await api.post(
            `/admin/${formData.get('action')}`,
            selectedIds
        );
        setFlash(response.data.message);
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
