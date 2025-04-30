import SearchInput from '../SearchInput';
import Dropdown from './Dropdown';
import SideButtons from './SideButtons';

export default function MobileView({ isDesktop }: { isDesktop: boolean }) {
    return (
        <div className="p-2 lg:hidden flex justify-between">
            <div className="flex gap-2 w-[75%]">
                <Dropdown />
                <SearchInput
                    shouldRender={!isDesktop}
                    className="relative w-[90%] mr-2"
                />
            </div>
            <div className="flex items-center">
                <SideButtons />
            </div>
        </div>
    );
}
