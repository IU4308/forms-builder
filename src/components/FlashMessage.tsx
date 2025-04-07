import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

type Flash = {
    message: string;
    type: 'SUCCESS' | 'ERROR';
} | null;

export default function FlashMessage({ className }: { className?: string }) {
    const { flashData } = useLoaderData();
    const [visible, setVisible] = useState(false);
    const [flash, setFlash] = useState<Flash>(null);
    console.log(flashData);

    useEffect(() => {
        setFlash(flashData);
        const handleFlash = () => {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
                setFlash(null);
            }, 1000);
        };
        // window.addEventListener('flashMessageChange', handleFlash);
        handleFlash();
        // return () =>window.removeEventListener('flashMessageChange', handleFlash);
    }, []);
    console.log(flash);
    if (!flash || !visible) return null;
    return (
        <div
            className={cn(
                'absolute z-30 w-[calc(100%-50px)] text-center',
                flash?.type === 'SUCCESS' && 'text-green-400',
                flash?.type === 'ERROR' && 'text-red-400',
                className
            )}
        >
            {flash.message}
        </div>
    );
}
