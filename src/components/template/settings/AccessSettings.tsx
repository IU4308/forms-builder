import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import AddUserButton from '@/components/template/AddUserButton';
import AppTable from '@/components/app-table/AppTable';
import { useTranslation } from 'react-i18next';
import { translateData } from '@/lib/utils';
import {
    templateUsersButtons,
    templateUsersTableAttributes,
} from '@/lib/constants';

export default function AccessSettings({
    users,
    isPublicState,
    allowedIds,
}: {
    users: { id: string; name: string; email: string }[];
    isPublicState: boolean | undefined;
    allowedIds: string[] | undefined;
}) {
    const { t } = useTranslation();
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
            <h1>{t('settings.access')}</h1>
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
                    {t('settings.public')}
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
                        attributes={translateData(
                            templateUsersTableAttributes,
                            ['label'],
                            t
                        )}
                        buttons={translateData(
                            templateUsersButtons,
                            ['label', 'description'],
                            t
                        )}
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
