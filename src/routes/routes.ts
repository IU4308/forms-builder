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
    templateLoader,
} from '@/lib/loaders';
import { adminAction } from '@/actions/admin.actions';
import AppLayout from '@/layouts/AppLayout';
import ErrorPage from '@/components/ErrorPage';
import { createElement } from 'react';
import Template from '@/pages/Template';
import { templateAction } from '@/actions/template.actions';

export const router = createBrowserRouter([
    {
        Component: AppLayout,
        HydrateFallback: Fallback,
        loader: appLoader,
        errorElement: createElement(ErrorPage),
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
                    {
                        path: '/templates',
                        Component: Template,
                        action: templateAction,
                        loader: templateLoader,
                        children: [
                            {
                                path: ':templateId',
                                Component: Template,
                                action: templateAction,
                                loader: templateLoader,
                            },
                        ],
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
        ],
    },
]);
