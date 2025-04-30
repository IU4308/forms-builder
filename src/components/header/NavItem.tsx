import { NavLink } from 'react-router';
import { Button } from '../ui/button';

type NavItemProps = {
    title: string;
    url: string;
    variant?: string;
    prefix?: string;
};

export default function NavItem({ title, url, prefix }: NavItemProps) {
    return (
        <NavLink
            to={url}
            className="max-lg:w-full max-lg:flex max-lg:justify-center"
        >
            <Button
                className="cursor-pointer max-lg:w-full max-lg:py-6"
                variant={'ghost'}
            >
                {prefix ? (
                    <span>
                        {prefix} ({title})
                    </span>
                ) : (
                    <span>{title}</span>
                )}
            </Button>
        </NavLink>
    );
}
