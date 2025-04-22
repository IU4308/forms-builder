import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Workspace from '../pages/Workspace';
import Admin from '../pages/Admin';
import Search from '../pages/Search';
import { login, register } from '@/actions/auth.actions';
import Fallback from '@/components/Fallback';
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
import { mainLoader } from '@/loaders/main.loader';
import { homeLoader } from '@/loaders/home.loader';
import { searchLoader } from '@/loaders/search.loader';
import { workspaceLoader } from '@/loaders/workspace.loader';
import { adminLoader } from '@/loaders/admin.loader';
import {
    formLoader,
    createTemplateLoader,
    editTemplateLoader,
    filledFormLoader,
} from '@/loaders/templates.loader';
import { appLoader } from '@/loaders/app.loader';
import { logoutLoader } from '@/loaders/logout.loader';

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
                        Component: Search,
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
                        loader: createTemplateLoader,
                        handle: { id: 'createTemplate' },
                        children: [
                            {
                                path: ':templateId',
                                Component: Template,
                                action: updateTemplate,
                                loader: editTemplateLoader,
                                handle: { id: 'editTemplate' },
                                children: [
                                    {
                                        path: 'forms',
                                        Component: Template,
                                        loader: formLoader,
                                        action: submitForm,
                                        handle: { id: 'form' },
                                        children: [
                                            {
                                                path: ':formId',
                                                Component: Template,
                                                loader: filledFormLoader,
                                                action: updateForm,
                                                handle: { id: 'filledForm' },
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
