import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function AddUserButton({
    users,
    selectedIds,
    onSelect,
}: {
    users: { id: string; name: string; email: string }[];
    selectedIds: string[];
    onSelect: (id: string) => void;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                type="button"
                className="my-4 border px-4 py-1.5 bg-accent rounded-xl cursor-pointer flex items-center gap-2"
            >
                <span>
                    <IoIosAddCircleOutline className="text-xl" />
                </span>
                <span className="hidden md:block">Add users</span>
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
                                onClick={() => onSelect(user.id)}
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
    );
}
