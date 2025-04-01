import { Button } from './ui/button';
import { NavLink } from 'react-router';
import { Input } from './ui/input';
import { IoIosSearch } from 'react-icons/io';
import ThemeSwitcher from './ThemeSwitcher';
import { IoMenuOutline } from 'react-icons/io5';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        url: '/workspace/1',
    },
    {
        title: 'Admin',
        url: '/admin',
    },
];

const NavItem = ({ title, url }: NavItemProps) => {
    return (
        <NavLink to={url}>
            <Button className="cursor-pointer" variant={'ghost'}>
                {title}
            </Button>
        </NavLink>
    );
};

const DesktopView = () => {
    return (
        <nav className="hidden md:flex max-w-[1280px] mx-auto w-full relative  py-2 px-4 gap-2 items-center justify-between">
            <div className="flex shrink-0">
                {menu.map((item) => (
                    <NavItem {...item} />
                ))}
                <div className="px-2 relative w-full min-w-[400px] ">
                    <IoIosSearch className="absolute right-4 top-1/4" />
                    <Input type="text" className="" />
                </div>
            </div>
            <div className=" flex gap-2">
                <ThemeSwitcher />
                <NavItem title="Login" url="/login" />
            </div>
        </nav>
    );
};

const MobileView = () => {
    return (
        <nav className="px-2 md:hidden flex justify-between">
            <div className="flex gap-2 shrink-0 w-[85%] border">
                <DropDown />
                {/* <NavItem title="Login" url="/login" /> */}
                {/* {menu.map((item) => (
                    <NavItem {...item} />
                ))} */}
                <div className="relative w-full">
                    <IoIosSearch className="absolute right-4 top-1/4" />
                    <Input type="text" className="" />
                </div>
            </div>
            <div className=" flex gap-2">
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

const DropDown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <IoMenuOutline className="text-2xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                {menu.map((item) => (
                    <DropdownMenuItem>
                        <NavItem {...item} />
                    </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                    <NavItem title="Login" url="/login" />
                </DropdownMenuItem>
                {/* <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default function Header() {
    return (
        <div className=" border-b">
            <DesktopView />
            <MobileView />
        </div>
    );
}
