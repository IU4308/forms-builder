import { Button } from './ui/button';
import { Form, NavLink, useLoaderData } from 'react-router';
import { Input } from './ui/input';
import { IoIosSearch } from 'react-icons/io';
import ThemeSwitcher from './ThemeSwitcher';
import { IoMenuOutline } from 'react-icons/io5';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { CurrentUser } from '@/lib/definitions';
import { useMediaQuery } from 'react-responsive';
import LanguageSwitcher from './LanguageSwitcher';
import { getNavMenu } from '@/lib/constants';
import { translateData } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

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
    const { t: translator } = useTranslation();
    const { currentUser, path } = useLoaderData() as {
        currentUser: CurrentUser;
        path: string;
    };
    const menu = translateData(getNavMenu(currentUser), ['title'], translator);
    return (
        <nav className="hidden lg:flex max-w-[1400px] mx-auto w-full relative  py-2 gap-2 items-center justify-between">
            <div className="flex shrink-0">
                {menu
                    .slice(0, 2)
                    .map(
                        (item) =>
                            item.shouldRender && (
                                <NavItem key={item.title} {...item} />
                            )
                    )}
                <Form
                    method="get"
                    action={path}
                    className=" relative w-full min-w-[400px] "
                >
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
                </Form>
            </div>
            <div className="flex items-center">
                {menu
                    .slice(2)
                    .reverse()
                    .map(
                        (item) =>
                            item.shouldRender && (
                                <NavItem
                                    key={item.title}
                                    name={name}
                                    {...item}
                                />
                            )
                    )}
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
    const { path } = useLoaderData();
    return (
        <div className="p-2 lg:hidden flex justify-between">
            <div className="flex gap-2 w-[75%]">
                <DropDown name={name} />
                <Form method="get" action={path} className="relative w-[90%]">
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
                </Form>
            </div>
            <div className="flex items-center">
                <SideButtons />
            </div>
        </div>
    );
};

const DropDown = ({ name }: { name: string }) => {
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
                                <NavItem name={name} {...item} />
                            </DropdownMenuItem>
                        )
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const SideButtons = () => {
    return (
        <div className="flex gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    );
};

export default function Header() {
    const { currentUser } = useLoaderData();
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    return (
        <div className="sticky z-50 bg-background top-0 border-b">
            <DesktopView name={currentUser?.name} isDesktop={isDesktop} />
            <MobileView name={currentUser?.name} isDesktop={isDesktop} />
        </div>
    );
}
