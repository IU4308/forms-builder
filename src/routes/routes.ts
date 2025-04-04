import { createBrowserRouter, redirect } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Workspace from '../pages/Workspace';
import Admin from '../pages/Admin';
import { api } from '../api/api';

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: '/admin', Component: Admin },
            {
                path: '/workspaces',
                children: [{ path: ':userId', Component: Workspace }],
            },
        ],
    },
    {
        Component: AuthLayout,
        children: [
            { path: 'login', Component: Login },
            {
                path: 'register',
                Component: Register,
                action: async ({ request }) => {
                    try {
                        const formData = await request.formData();
                        await api.post(
                            '/auth/users',
                            Object.fromEntries(formData)
                        );
                        return redirect('/login');
                    } catch (error: any) {
                        console.log(error.response?.data);
                        return { error: error.response?.data };
                    }
                },
            },
        ],
    },
]);
