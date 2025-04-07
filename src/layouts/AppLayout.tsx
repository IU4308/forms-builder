import FlashMessage from '@/components/FlashMessage';
import { Outlet } from 'react-router';

export default function AppLayout() {
    return (
        <main className="relative">
            <Outlet />
            <FlashMessage />
        </main>
    );
}
