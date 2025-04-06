import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

export default function FlashMessage({ className }: { className?: string }) {
    const { flash } = useLoaderData();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleFlash = () => {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 1000);
        };
        window.addEventListener('flashMessageChange', handleFlash);
        handleFlash();
        return () =>
            window.removeEventListener('flashMessageChange', handleFlash);
    }, []);

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
