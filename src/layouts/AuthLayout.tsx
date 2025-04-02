import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Outlet } from 'react-router';

export default function AuthLayout() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="relative w-full max-w-sm">
                <div className="absolute right-0">
                    <ThemeSwitcher />
                </div>
                <Outlet />
            </div>
        </div>
    );
}
