import { useLoaderData } from 'react-router';
import { CurrentUser } from '@/lib/definitions';
import { getNavMenu } from '@/lib/constants';
import { translateData } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import SearchInput from '../SearchInput';
import NavItem from './NavItem';
import SideButtons from './SideButtons';

export default function DesktopView({ isDesktop }: { isDesktop: boolean }) {
    const { t: translator } = useTranslation();
    const { currentUser } = useLoaderData() as {
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

                <SearchInput
                    shouldRender={isDesktop}
                    className="relative w-full min-w-[400px]"
                />
            </div>
            <div className="flex items-center">
                {menu
                    .slice(2)
                    .reverse()
                    .map(
                        (item) =>
                            item.shouldRender && (
                                <NavItem key={item.title} {...item} />
                            )
                    )}
                <SideButtons />
            </div>
        </nav>
    );
}
