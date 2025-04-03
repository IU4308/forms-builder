import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Workspace from './pages/Workspace';
import Admin from './pages/Admin';
import { api } from './api/api';

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
                        const userData = {
                            name: formData.get('name'),
                            email: formData.get('email'),
                            password: formData.get('password'),
                        };
                        const response = await api.post(
                            '/auth/users',
                            userData
                        );
                        console.log(response.data);
                        return response.data;
                    } catch (error: any) {
                        console.log(error.response?.data);
                        return { error: error.response?.data };
                    }
                },
            },
        ],
    },
]);
