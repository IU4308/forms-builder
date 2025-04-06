import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

export default function FlashMessage({ className }: { className?: string }) {
    const { flash } = useLoaderData();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [sessionStorage.getItem('flash')]);

    if (!flash || !visible) return null;
    return (
        <div
            className={cn(
                'absolute z-30 w-[calc(100%-50px)] text-center',
                flash.type === 'SUCCESS' && 'text-green-400',
                flash.type === 'ERROR' && 'text-red-400',
                className
            )}
        >
            {flash.message}
        </div>
    );
}
