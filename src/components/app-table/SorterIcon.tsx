import {
    ChevronDownIcon,
    ChevronsUpDownIcon,
    ChevronUpIcon,
} from 'lucide-react';

export default function SorterIcon({
    isSorted,
    isDescending,
}: {
    isSorted: boolean;
    isDescending: boolean;
}) {
    return isSorted ? (
        isDescending ? (
            <ChevronDownIcon className="icon-2" />
        ) : (
            <ChevronUpIcon className="icon-2" />
        )
    ) : (
        <ChevronsUpDownIcon className="icon-2" />
    );
}
