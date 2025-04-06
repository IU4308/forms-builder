import FlashMessage from '@/components/FlashMessage';
import Header from '@/components/Header';
import { Outlet } from 'react-router';

export default function MainLayout() {
    return (
        <main>
            <Header />
            <div className="relative mx-auto p-4 max-w-[1400px]">
                <FlashMessage className="top-2" />
                <Outlet />
            </div>
        </main>
    );
}
