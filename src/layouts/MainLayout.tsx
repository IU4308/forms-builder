import Header from '@/components/header/Header';
import ReportDialog from '@/components/ReportDialog';
import { Outlet } from 'react-router';

export default function MainLayout() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <Header />
                <div className="relative mx-auto p-4 max-w-[1400px]">
                    <Outlet />
                </div>
            </div>
            <ReportDialog />
        </div>
    );
}
