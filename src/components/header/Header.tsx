import { useMediaQuery } from 'react-responsive';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

export default function Header() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    return (
        <div className="sticky z-50 bg-background top-0 border-b">
            <DesktopView isDesktop={isDesktop} />
            <MobileView isDesktop={isDesktop} />
        </div>
    );
}
