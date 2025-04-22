import { Button } from './ui/button';
import { Form, NavLink, useLoaderData } from 'react-router';
import { Input } from './ui/input';
import { IoIosSearch } from 'react-icons/io';
import ThemeSwitcher from './ThemeSwitcher';
import { IoLanguage, IoMenuOutline } from 'react-icons/io5';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { CurrentUser } from '@/lib/definitions';
import { getMenu } from '@/lib/utils';
import { useMediaQuery } from 'react-responsive';

type NavItemProps = {
    title: string;
    url: string;
    variant?: string;
    name?: string;
};

const NavItem = ({ title, url, name }: NavItemProps) => {
    return (
        <NavLink
            to={url}
            className="max-lg:w-full max-lg:flex max-lg:justify-center"
        >
            <Button
                className="cursor-pointer max-lg:w-full max-lg:py-6"
                variant={'ghost'}
            >
                {title === 'Logout' ? (
                    <span>
                        {name} ({title})
                    </span>
                ) : (
                    <span>{title}</span>
                )}
            </Button>
        </NavLink>
    );
};

const DesktopView = ({
    name,
    isDesktop,
}: {
    name: string;
    isDesktop: boolean;
}) => {
    const { currentUser } = useLoaderData() as { currentUser: CurrentUser };
    const menu = getMenu(currentUser);
    return (
        <nav className="hidden lg:flex max-w-[1400px] mx-auto w-full relative  py-2 gap-2 items-center justify-between">
            <div className="flex shrink-0">
                {menu.slice(0, 2).map((item) => (
                    <NavItem key={item.title} {...item} />
                ))}
                <div className=" relative w-full min-w-[400px] ">
                    <Button
                        type="submit"
                        className="absolute right-0 border border-l-0 rounded-l-none !border-input/10"
                        variant={'secondary'}
                    >
                        <IoIosSearch />
                    </Button>
                    {isDesktop && (
                        <Input
                            type="text"
                            name="query"
                            className="hidden lg:block !border-secondary"
                        />
                    )}
                </div>
            </div>
            <div className="flex items-center">
                {menu
                    .slice(2)
                    .reverse()
                    .map((item) => (
                        <NavItem key={item.title} name={name} {...item} />
                    ))}
                <SideButtons />
            </div>
        </nav>
    );
};

const MobileView = ({
    name,
    isDesktop,
}: {
    name: string;
    isDesktop: boolean;
}) => {
    return (
        <nav className="p-2 lg:hidden flex justify-between">
            <div className="flex gap-2 w-[75%]">
                <DropDown name={name} />
                <div className="relative w-[90%]">
                    <Button
                        className="absolute right-0 border-1 border-l-0 rounded-l-none"
                        variant={'secondary'}
                    >
                        <IoIosSearch />
                    </Button>
                    {!isDesktop && (
                        <Input
                            type="text"
                            name="query"
                            className="block lg:hidden"
                        />
                    )}
                </div>
            </div>
            <div className="flex items-center">
                <SideButtons />
            </div>
        </nav>
    );
};

const DropDown = ({ name }: { name: string }) => {
    const [open, setOpen] = useState(false);
    const { currentUser } = useLoaderData() as { currentUser: CurrentUser };
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="cursor-pointer">
                <IoMenuOutline className="text-2xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen">
                {getMenu(currentUser).map((item) => (
                    <DropdownMenuItem
                        key={item.title}
                        className="flex justify-center cursor-pointer py-0"
                        onClick={() => setOpen(false)}
                    >
                        <NavItem name={name} {...item} />
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const SideButtons = () => {
    return (
        <>
            <ThemeSwitcher />
            <Button type="button" variant={'ghost'}>
                <IoLanguage />
            </Button>
        </>
    );
};

export default function Header() {
    const { currentUser, path } = useLoaderData();
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    return (
        <Form
            method="get"
            action={path}
            className="sticky z-50 bg-background top-0 border-b"
        >
            <DesktopView name={currentUser?.name} isDesktop={isDesktop} />
            <MobileView name={currentUser?.name} isDesktop={isDesktop} />
        </Form>
    );
}
