import { ReactNode } from 'react';
import { Button } from './ui/button';
import { adminButtons } from '@/lib/constants.tsx';
import { setSentenceCase } from '@/lib/utils';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="sticky top-[53px] bg-background z-20 flex gap-2 py-2">
            {children}
        </div>
    );
}

export function WorkspaceToolbar() {
    return (
        <Layout>
            <Button variant={'outline'}>Create</Button>
            <Button variant={'destructive'}>Delete</Button>
        </Layout>
    );
}

export function AdminToolbar({ selectedRows }: { selectedRows: number[] }) {
    const isDisabled = selectedRows.length === 0;
    return (
        <Layout>
            {adminButtons.map((button) => (
                <TooltipProvider key={button.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="submit"
                                name="action"
                                className="cursor-pointer"
                                value={button.label}
                                variant={button.variant ?? 'outline'}
                                disabled={isDisabled}
                            >
                                <span className="hidden md:inline">
                                    {setSentenceCase(button.label)}
                                </span>
                                <span>{button.icon}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{button.description}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </Layout>
    );
}
