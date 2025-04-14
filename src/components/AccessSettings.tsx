import { useState } from 'react';
import Table from './Table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const attributes = [
    {
        label: 'name',
        key: 'name',
        shouldRender: true,
    },
    {
        label: 'email',
        key: 'email',
        shouldRender: true,
    },
];

export default function AccessSettings({
    users,
}: {
    users: { id: string; name: string; email: string }[];
}) {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const handleAddId = (id: string) => {
        setSelectedIds((prevIds) => [...prevIds, id]);
    };
    return (
        <div className="pb-20">
            <input hidden readOnly name="selectedUsers" value={selectedIds} />
            <h1>Access settings</h1>
            <DropdownMenu>
                <DropdownMenuTrigger className="my-4 w-[280px] border px-4 py-1 bg-accent rounded-sm cursor-pointer">
                    Add users
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    side="bottom"
                    align="start"
                    className="w-[280px]"
                >
                    <DropdownMenuLabel>Select user</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {users.map(
                        (user) =>
                            !selectedIds.includes(user.id) && (
                                <DropdownMenuItem
                                    key={user.id}
                                    className="border-b px-8 py-2"
                                    onClick={() => handleAddId(user.id)}
                                >
                                    <div className="flex flex-col gap-2">
                                        <div>{user.name}</div>
                                        <div>{user.email}</div>
                                    </div>
                                </DropdownMenuItem>
                            )
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <Table
                data={users.filter((user) => selectedIds.includes(user.id))}
                attributes={attributes}
                shouldSort={true}
            />
        </div>
    );
}
