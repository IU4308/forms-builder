import { useState } from 'react';
import { ToolbarButton } from '@/lib/definitions';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import AddUserButton from '@/components/template/AddUserButton';
import AppTable from '@/components/app-table/AppTable';

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

                    <AppTable
                        data={users.filter((user) =>
                            selectedIds.includes(user.id)
                        )}
                        attributes={attributes}
                        buttons={buttons}
                        toolbarSlot={
                            <AddUserButton
                                key={Number(isPublic)}
                                users={users}
                                selectedIds={selectedIds}
                                onSelect={handleAddId}
                            />
                        }
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
