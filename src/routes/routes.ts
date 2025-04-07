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
import {
    adminLoader,
    appLoader,
    homeLoader,
    logoutLoader,
} from '@/lib/loaders';
import { adminAction } from '@/actions/admin.actions';
import AppLayout from '@/layouts/AppLayout';

export const router = createBrowserRouter([
    {
        Component: AppLayout,
        HydrateFallback: Fallback,
        loader: appLoader,
        children: [
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
                        action: adminAction,
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
                // loader: loginLoader,
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
        ],
    },
]);
