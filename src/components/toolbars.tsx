import { ReactNode } from 'react';
import { Button } from './ui/button';

function Layout({ children }: { children: ReactNode }) {
    return <div className="flex gap-2 mb-2">{children}</div>;
}

export function WorkspaceToolbar() {
    return (
        <Layout>
            <Button variant={'outline'}>Create</Button>
            <Button variant={'destructive'}>Delete</Button>
        </Layout>
    );
}

export function AdminToolbar() {
    return (
        <Layout>
            <Button variant={'outline'}>Block</Button>
            <Button variant={'outline'}>Unblock</Button>
            <Button variant={'outline'}>Add to admins</Button>
            <Button variant={'outline'}>Remove from admins</Button>
            <Button variant={'destructive'}>Delete</Button>
        </Layout>
    );
}
