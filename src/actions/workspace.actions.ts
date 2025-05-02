import { api } from '@/api/api';
import { setFlash } from '@/lib/utils';

export const deleteData = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const selectedIds =
            (formData.get('allIds') as string)?.split(',') ??
            formData.getAll('id');
        const response = await api.post(
            `/${formData.get('route')}/delete`,
            selectedIds
        );
        setFlash(response.data.message);
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};
