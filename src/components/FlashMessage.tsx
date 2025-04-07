import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export default function FlashMessage() {
    const { flash } = useLoaderData();
    useEffect(() => {
        if (flash.message) toast(flash.message);
    }, [flash]);
    return <Toaster />;
}
