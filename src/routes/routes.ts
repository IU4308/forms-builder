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
import {
    publish,
    editTemplate,
    publishComment,
    likeTemplate,
} from '@/actions/template.actions';
import { submitForm, updateForm } from '@/actions/forms.actions';
import { mainLoader } from '@/loaders/main.loader';
import { homeLoader } from '@/loaders/home.loader';
import { searchLoader } from '@/loaders/search.loader';
import { workspaceLoader } from '@/loaders/workspace.loader';
import { adminLoader } from '@/loaders/admin.loader';
import { appLoader } from '@/loaders/app.loader';
import { logoutLoader } from '@/loaders/logout.loader';
import { createTemplateLoader } from '@/loaders/createTemplate.loader';
import { templateLoader } from '@/loaders/template.loader';
import { formLoader } from '@/loaders/form.loader';
import { filledFormLoader } from '@/loaders/filledForm.loader';
import Template from '@/pages/Template';
import { templateRedirector } from '@/loaders/comments.loader';
import NotFoundPage from '@/components/NotFoundPage';
import {
    deleteData,
    getToken,
    sendUserInfo,
} from '@/actions/workspace.actions';
import { report } from '@/actions/app.actions';
import { authLoader } from '@/loaders/auth.loader';

export const router = createBrowserRouter([
    {
        Component: AppLayout,
        HydrateFallback: Fallback,
        loader: appLoader,
        action: report,
        errorElement: createElement(ErrorPage),
        children: [
            {
                Component: MainLayout,
                HydrateFallback: Fallback,
                action: report,
                loader: mainLoader,

                children: [
                    {
                        index: true,
                        Component: Home,
                        loader: homeLoader,
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/search/:query',
                        Component: Search,
                        loader: searchLoader,
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/admin',
                        Component: Admin,
                        loader: adminLoader,
                        action: adminAction,
                        HydrateFallback: Fallback,
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/workspace/:userId',
                        Component: Workspace,
                        action: deleteData,
                        loader: workspaceLoader,
                        errorElement: createElement(ErrorPage),
                        children: [
                            {
                                path: 'about',
                                action: sendUserInfo,
                            },
                            {
                                path: 'token',
                                action: getToken,
                            },
                        ],
                    },
                    {
                        path: '/templates',
                        Component: Template,
                        action: publish,
                        loader: createTemplateLoader,
                        handle: { id: 'createTemplate' },
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/templates/:templateId',
                        Component: Template,
                        action: editTemplate,
                        loader: templateLoader,
                        handle: { id: 'editTemplate' },
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/templates/:templateId/forms',
                        Component: Template,
                        loader: formLoader,
                        action: submitForm,
                        handle: { id: 'form' },
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/templates/:templateId/forms/:formId',
                        Component: Template,
                        loader: filledFormLoader,
                        action: updateForm,
                        handle: { id: 'filledForm' },
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/templates/:templateId/comments',
                        action: publishComment,
                        loader: templateRedirector,
                        Component: Fallback,
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '/templates/:templateId/likes',
                        action: likeTemplate,
                        loader: templateRedirector,
                        Component: Fallback,
                        errorElement: createElement(ErrorPage),
                    },
                    {
                        path: '*',
                        Component: NotFoundPage,
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
                        loader: authLoader,
                    },
                    {
                        path: 'logout',
                        loader: logoutLoader,
                    },
                    {
                        path: 'register',
                        Component: Register,
                        action: register,
                        loader: authLoader,
                    },
                ],
            },
        ],
    },
]);
