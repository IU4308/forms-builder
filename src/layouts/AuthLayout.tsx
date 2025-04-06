import ThemeSwitcher from '@/components/ThemeSwitcher';
import { cn } from '@/lib/utils';
import { Outlet, useLoaderData } from 'react-router';

export default function AuthLayout() {
    const { message, messageType } = useLoaderData();
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="relative w-full max-w-sm">
                <div
                    className={cn(
                        'absolute top-[-50px] w-full text-center',
                        messageType === 'SUCCESS'
                            ? 'text-green-400'
                            : 'text-red-400'
                    )}
                >
                    {message}
                </div>
                <div className="absolute right-0">
                    <ThemeSwitcher />
                </div>
                <Outlet />
            </div>
        </div>
    );
}
