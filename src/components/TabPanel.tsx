import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function TabPanel({
    buttons,
    tabId,
    setTabId,
    className,
}: {
    buttons: { id: number; label: string }[];
    tabId: number;
    setTabId: React.Dispatch<React.SetStateAction<number>>;
    className?: string;
}) {
    return (
        <div className={cn('flex gap-2', className)}>
            {buttons.map((button) => (
                <Button
                    key={button.label}
                    type="button"
                    variant={tabId === button.id ? 'default' : 'ghost'}
                    onClick={() => setTabId(button.id)}
                >
                    {button.label}
                </Button>
            ))}
        </div>
    );
}
