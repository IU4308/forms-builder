import { ReactNode } from 'react';
import { Button } from './ui/button';
import * as changeCase from 'change-case';
import { adminButtons } from '@/lib/constants';

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
                <Button
                    key={button.label}
                    disabled={isDisabled}
                    name="action"
                    value={button.label}
                    type="submit"
                    variant={button.variant ?? 'outline'}
                >
                    {changeCase.sentenceCase(button.label)}
                </Button>
            ))}
        </Layout>
    );
}
