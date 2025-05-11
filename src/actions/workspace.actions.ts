import { api } from '@/api/api';
import { fetchToken } from '@/lib/react-query';
import { setFlash } from '@/lib/utils';
import { ActionFunctionArgs, redirect } from 'react-router';

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

export const sendUserInfo = async ({ request, params }: ActionFunctionArgs) => {
    try {
        const formData = Object.fromEntries(await request.formData());
        const response = await api.post(`/users/${params.userId}`, formData);
        setFlash(response.data.message);
        return redirect(`/workspace/${params.userId}`);
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const getToken = async ({ params }: ActionFunctionArgs) => {
    try {
        return {
            token: await fetchToken(params.userId!),
        };
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
