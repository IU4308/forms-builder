import Header from '@/components/header/Header';
import { Outlet } from 'react-router';

export default function MainLayout() {
    return (
        <div>
            <Header />
            <div className="relative mx-auto p-4 max-w-[1400px]">
                <Outlet />
            </div>
        </div>
    );
}
