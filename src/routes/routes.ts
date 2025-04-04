import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Workspace from '../pages/Workspace';
import Admin from '../pages/Admin';
import { register } from '@/actions/auth.actions';

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
                action: register,
            },
        ],
    },
]);
