import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export default function Fallback() {
    const { theme } = useTheme();
    return (
        <div
            className={cn(
                'h-screen w-screen',
                theme === 'light' ? 'bg-white' : 'bg-black'
            )}
        ></div>
    );
}
