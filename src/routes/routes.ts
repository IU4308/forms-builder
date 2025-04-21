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
// import {
//     adminLoader,
//     appLoader,
//     logoutLoader,
//     templateLoader,
//     workspaceLoader,
// } from '@/lib/loaders';
import { adminAction } from '@/actions/admin.actions';
import AppLayout from '@/layouts/AppLayout';
import ErrorPage from '@/components/ErrorPage';
import { createElement } from 'react';
import Template from '@/pages/Template';
import {
    publish,
    deleteTemplates,
    updateTemplate,
} from '@/actions/template.actions';
import { submitForm, updateForm } from '@/actions/forms.actions';
import SearchPage from '@/components/SearchPage';
import { mainLoader } from '@/loaders/main';
import { homeLoader } from '@/loaders/home';
import { searchLoader } from '@/loaders/search';
import { workspaceLoader } from '@/loaders/workspace';
import { adminLoader } from '@/loaders/admin';
import { templateLoader } from '@/loaders/templates';
import { appLoader } from '@/loaders/app';
import { logoutLoader } from '@/loaders/logout';

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
                loader: mainLoader,
                children: [
                    {
                        index: true,
                        Component: Home,
                        loader: homeLoader,
                    },
                    {
                        path: '/search/:query',
                        Component: SearchPage,
                        loader: searchLoader,
                    },
                    {
                        path: '/admin',
                        Component: Admin,
                        loader: adminLoader,
                        action: adminAction,
                        HydrateFallback: Fallback,
                    },
                    {
                        path: '/workspace',
                        Component: Workspace,
                        action: deleteTemplates,
                        loader: workspaceLoader,
                    },
                    {
                        path: '/templates',
                        Component: Template,
                        action: publish,
                        loader: templateLoader,
                        children: [
                            {
                                path: ':templateId',
                                Component: Template,
                                action: updateTemplate,
                                loader: templateLoader,
                                children: [
                                    {
                                        path: 'forms',
                                        action: submitForm,
                                        children: [
                                            {
                                                path: ':formId',
                                                Component: Template,
                                                loader: templateLoader,
                                                action: updateForm,
                                            },
                                        ],
                                    },
                                ],
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
