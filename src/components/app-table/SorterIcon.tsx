import {
    ChevronDownIcon,
    ChevronsUpDownIcon,
    ChevronUpIcon,
} from 'lucide-react';

export default function SorterIcon({
    isSorter,
    isDescending,
}: {
    isSorter: boolean;
    isDescending: boolean;
}) {
    return isSorter ? (
        isDescending ? (
            <ChevronDownIcon className="icon-2" />
        ) : (
            <ChevronUpIcon className="icon-2" />
        )
    ) : (
        <ChevronsUpDownIcon className="icon-2" />
    );
}
