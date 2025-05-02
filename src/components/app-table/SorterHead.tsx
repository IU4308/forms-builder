import { Button } from '../ui/button';
import { formatContent } from '@/lib/utils';
import * as changeCase from 'change-case';
import SorterIcon from './SorterIcon';

export default function SorterHead({
    label,
    isSorter,
    isDescending,
    onChangeSorter,
}: {
    label: string;
    isSorter: boolean;
    isDescending: boolean;
    onChangeSorter: () => void;
}) {
    return (
        <Button
            type="button"
            className="cursor-pointer"
            variant={'ghost'}
            onClick={onChangeSorter}
        >
            <span>{formatContent(changeCase.sentenceCase(label), 20)}</span>
            <SorterIcon isSorter={isSorter} isDescending={isDescending!} />
        </Button>
    );
}
