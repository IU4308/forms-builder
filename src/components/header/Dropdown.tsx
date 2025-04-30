import { useLoaderData } from 'react-router';
import { IoMenuOutline } from 'react-icons/io5';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { CurrentUser } from '@/lib/definitions';
import { getNavMenu } from '@/lib/constants';
import { translateData } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import NavItem from './NavItem';

export default function Dropdown() {
    const { t: translator } = useTranslation();
    const [open, setOpen] = useState(false);
    const { currentUser } = useLoaderData() as { currentUser: CurrentUser };
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="cursor-pointer">
                <IoMenuOutline className="text-2xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen">
                {translateData(
                    getNavMenu(currentUser),
                    ['title'],
                    translator
                ).map(
                    (item) =>
                        item.shouldRender && (
                            <DropdownMenuItem
                                key={item.title}
                                className="flex justify-center cursor-pointer py-0"
                                onClick={() => setOpen(false)}
                            >
                                <NavItem {...item} />
                            </DropdownMenuItem>
                        )
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
