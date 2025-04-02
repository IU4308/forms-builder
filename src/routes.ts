import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Workspace from './pages/Workspace';
import Admin from './pages/Admin';

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [{ index: true, Component: Home }],
    },
    {
        Component: AuthLayout,
        children: [
            { path: 'login', Component: Login },
            { path: 'register', Component: Register },
        ],
    },
    { path: '/admin', Component: Admin },
    {
        path: '/workspaces',
        children: [{ path: ':userId', Component: Workspace }],
    },
]);
