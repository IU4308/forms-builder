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
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { ToolbarButton } from '@/lib/definitions';
import { IoRemoveCircleOutline } from 'react-icons/io5';

const attributes = [
    {
        label: 'id',
        key: 'id',
        shouldRender: false,
    },
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

const buttons: ToolbarButton[] = [
    {
        label: 'remove',
        type: 'button',
        description: 'Remove user',
        variant: 'destructive',
        icon: <IoRemoveCircleOutline />,
    },
];

export default function AccessSettings({
    users,
    isPublicState,
    allowedIds,
}: {
    users: { id: string; name: string; email: string }[];
    isPublicState: boolean | undefined;
    allowedIds: string[] | undefined;
}) {
    const [isPublic, setIsPublic] = useState(isPublicState ?? true);
    const [selectedIds, setSelectedIds] = useState<string[]>(allowedIds ?? []);
    const handleAddId = (id: string) =>
        setSelectedIds((prevIds) => [...prevIds, id]);
    const handleMarkToRemove = (markedIds: string[]) =>
        setSelectedIds((prevIds) =>
            prevIds.filter((id) => !markedIds.includes(id))
        );
    const handleIsPublic = () => setIsPublic(!isPublic);
    return (
        <div className="pb-20">
            <h1>Access settings</h1>
            <div className="flex gap-4 py-4 items-center">
                <input
                    hidden
                    readOnly
                    id="public"
                    name="isPublic"
                    value={Number(isPublic)}
                />
                <Checkbox
                    id="public"
                    checked={isPublic}
                    onClick={handleIsPublic}
                />
                <Label htmlFor="public" className="text-xl">
                    Public (can be filled out by any user)
                </Label>
            </div>
            {!isPublic && (
                <>
                    <input
                        hidden
                        readOnly
                        name="selectedUsers"
                        value={selectedIds}
                    />
                    <DropdownMenu key={Number(isPublic)}>
                        <DropdownMenuTrigger
                            type="button"
                            className="my-4 w-[280px] border px-4 py-1 bg-accent rounded-sm cursor-pointer"
                        >
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
                        data={users.filter((user) =>
                            selectedIds.includes(user.id)
                        )}
                        attributes={attributes}
                        buttons={buttons}
                        renderCheckbox={true}
                        shouldSort={true}
                        shouldSubmit={false}
                        handleMarkToRemove={handleMarkToRemove}
                    />
                </>
            )}
        </div>
    );
}
