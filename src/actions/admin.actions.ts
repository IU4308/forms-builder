import { api } from '@/api/api';

export const adminAction = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const response = await api.post(
            `/admin/block`,
            formData.getAll('userId')
        );
        console.log(response.data);
    } catch (error: any) {
        console.log(error);
    }
};
