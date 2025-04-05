import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Workspace from '../pages/Workspace';
import Admin from '../pages/Admin';
import { login, register } from '@/actions/auth.actions';
import Fallback from '@/components/Fallback';
import { adminLoader, homeLoader, logoutLoader } from '@/lib/loaders';

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        HydrateFallback: Fallback,
        loader: homeLoader,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/admin',
                Component: Admin,
                loader: adminLoader,
                HydrateFallback: Fallback,
            },
            {
                path: '/workspaces',
                children: [{ path: ':userId', Component: Workspace }],
            },
        ],
    },
    {
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login,
                action: login,
            },
            {
                path: 'logout',
                loader: logoutLoader,
            },
            {
                path: 'register',
                Component: Register,
                action: register,
            },
        ],
    },
]);
