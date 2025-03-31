import { IoHomeOutline } from 'react-icons/io5';
import { Button } from './ui/button';
import { NavLink } from 'react-router';
import { Input } from './ui/input';
import { IoIosSearch } from 'react-icons/io';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
    return (
        <nav className="relative bg-secondary py-2 px-4 flex flex-col items-center sm:flex-row sm:justify-center">
            <div className="absolute right-2">
                <ThemeSwitcher />
            </div>
            <NavLink to={'/'}>
                <Button className="cursor-pointer" variant={'ghost'}>
                    <IoHomeOutline />
                </Button>
            </NavLink>
            <NavLink to={'/'}>
                <Button variant={'ghost'}>My Workspace</Button>
            </NavLink>
            <NavLink to={'/'}>
                <Button variant={'ghost'}>Admin</Button>
            </NavLink>
            <div className="relative w-full max-w-[300px] sm:min-w-[300px]">
                <IoIosSearch className="absolute right-2 top-1/4" />
                <Input type="text" />
            </div>
        </nav>
    );
}
