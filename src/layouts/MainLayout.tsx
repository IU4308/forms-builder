import Header from '@/components/Header';
import { Outlet } from 'react-router';

export default function MainLayout() {
    return (
        <main>
            <Header />
            <div className="mx-auto p-4 max-w-[1400px]">
                <Outlet />
            </div>
        </main>
    );
}
