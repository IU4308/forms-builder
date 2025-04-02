import { Button } from './ui/button';
import { NavLink } from 'react-router';
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

type NavItemProps = {
    title: string;
    url: string;
    variant?: string;
};

const menu = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'My Workspace',
        url: '/workspaces/1',
    },
    {
        title: 'Login',
        url: '/login',
    },
    {
        title: 'Admin',
        url: '/admin',
    },
];

const NavItem = ({ title, url }: NavItemProps) => {
    return (
        <NavLink
            to={url}
            className="max-lg:w-full max-lg:flex max-lg:justify-center"
        >
            <Button
                className="cursor-pointer max-lg:w-full max-lg:py-6"
                variant={'ghost'}
            >
                {title}
            </Button>
        </NavLink>
    );
};

const DesktopView = () => {
    return (
        <nav className="hidden lg:flex max-w-[1400px] mx-auto w-full relative  py-2 gap-2 items-center justify-between">
            <div className="flex shrink-0">
                {menu.slice(0, 2).map((item) => (
                    <NavItem key={item.title} {...item} />
                ))}
                <div className=" relative w-full min-w-[400px] ">
                    <IoIosSearch className="absolute right-4 top-1/4" />
                    <Input type="text" className="" />
                </div>
            </div>
            <div className="flex items-center">
                {menu
                    .slice(2)
                    .reverse()
                    .map((item) => (
                        <NavItem key={item.title} {...item} />
                    ))}
                <SideButtons />
            </div>
        </nav>
    );
};

const MobileView = () => {
    return (
        <nav className="p-2 lg:hidden flex justify-between">
            <div className="flex gap-2 w-[75%]">
                <DropDown />
                <div className="relative w-[90%]">
                    <IoIosSearch className="absolute right-4 top-1/4" />
                    <Input type="text" className="" />
                </div>
            </div>
            <div className="flex items-center">
                <SideButtons />
            </div>
        </nav>
    );
};

const DropDown = () => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="cursor-pointer">
                <IoMenuOutline className="text-2xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen">
                {/* <DropdownMenuSeparator /> */}
                {menu.map((item) => (
                    <DropdownMenuItem
                        key={item.title}
                        className="flex justify-center cursor-pointer py-0"
                        onClick={() => setOpen(false)}
                    >
                        <NavItem {...item} />
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
            <Button variant={'ghost'}>
                <IoLanguage />
            </Button>
        </>
    );
};

export default function Header() {
    return (
        <div className="sticky z-10 bg-background top-0 border-b">
            <DesktopView />
            <MobileView />
        </div>
    );
}
