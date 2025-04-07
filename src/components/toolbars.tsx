import { ReactNode } from 'react';
import { Button } from './ui/button';

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
