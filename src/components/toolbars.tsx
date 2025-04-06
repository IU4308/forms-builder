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
                    type="submit"
                    name="action"
                    key={button.label}
                    value={button.label}
                    variant={button.variant ?? 'outline'}
                    disabled={isDisabled}
                >
                    {changeCase.sentenceCase(button.label)}
                </Button>
            ))}
        </Layout>
    );
}
