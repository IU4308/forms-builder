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

export function AdminToolbar({
    selectedRows,
    // setSelectedRows,
}: {
    selectedRows: number[];
    // setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>;
}) {
    const isDisabled = selectedRows.length === 0;
    return (
        <Layout>
            <Button
                disabled={isDisabled}
                name="action"
                value={'block'}
                type="submit"
                variant={'outline'}
            >
                Block
            </Button>
            <Button disabled={isDisabled} type="button" variant={'outline'}>
                Unblock
            </Button>
            <Button disabled={isDisabled} type="button" variant={'outline'}>
                Add to admins
            </Button>
            <Button disabled={isDisabled} type="button" variant={'outline'}>
                Remove from admins
            </Button>
            <Button disabled={isDisabled} type="button" variant={'destructive'}>
                Delete
            </Button>
        </Layout>
    );
}
