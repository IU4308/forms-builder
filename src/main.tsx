import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
        <RouterProvider router={router} />
    </StrictMode>
);
