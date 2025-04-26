import { api } from '@/api/api';
import socket from '@/lib/socket';
import { setFlash } from '@/lib/utils';
import { ActionFunctionArgs, redirect } from 'react-router';

export const publish = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const response = await api.post('/templates', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setFlash(response.data.message);
        return redirect(`/templates/${response.data.templateId}`);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const updateTemplate = async ({
    request,
    params,
}: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const { templateId } = params;
        console.log(Object.fromEntries(formData));
        const response = await api.put(`/templates/${templateId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setFlash(response.data.message);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const deleteTemplates = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const selectedIds =
            (formData.get('allIds') as string)?.split(',') ??
            formData.getAll('id');
        const response = await api.post(
            `/${formData.get('action')}/delete`,
            selectedIds
        );
        setFlash(response.data.message);
    } catch (error: any) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const publishComment = async ({ request }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const response = await api.post(`/templates/comments`, formData);
        socket.emit('publishComment', response.data.comment);
        setFlash(response.data.message);
        return redirect(formData.get('redirectTo') as string);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};

export const likeTemplate = async ({ request }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const response = await api.post(`/templates/likes`, formData);
        setFlash(response.data.message);
        return redirect(formData.get('redirectTo') as string);
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
