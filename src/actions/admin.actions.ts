import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';

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
    } catch (error: any) {
        console.log(error);
    }
};
