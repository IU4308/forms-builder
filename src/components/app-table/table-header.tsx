import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatContent } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { AdminTableLabel, HeaderProps } from '@/lib/definitions';
import {
    ChevronDownIcon,
    ChevronsUpDownIcon,
    ChevronUpIcon,
} from 'lucide-react';
import _ from 'lodash';
import { Button } from '../ui/button';

const ID_KEY = 0;

export default function AppTableHeader({
    attributes,
    body,
    renderCheckbox,
    allSelected,
    onClick,
    sorter,
    handleChangeSorter,
    isDescending,
    shouldSubmit,
}: HeaderProps) {
    return (
        <TableHeader>
            <TableRow className="hover:bg-background">
                {renderCheckbox && body.length !== 0 && (
                    <TableHead>
                        <Checkbox
                            className="w-5 h-5"
                            name={shouldSubmit ? 'allIds' : ''}
                            value={body.map(
                                (item) => item[ID_KEY].content as string
                            )}
                            checked={allSelected}
                            onClick={onClick}
                        />
                    </TableHead>
                )}
                {attributes.map(
                    (cell, index) =>
                        (cell.shouldRender ?? true) && (
                            <TableHead key={index} className={cell.className}>
                                {sorter ? (
                                    <Button
                                        type="button"
                                        className="cursor-pointer"
                                        variant={'ghost'}
                                        onClick={() =>
                                            handleChangeSorter!(
                                                cell.key as AdminTableLabel
                                            )
                                        }
                                    >
                                        <span>
                                            {formatContent(cell.label, 15)}
                                        </span>
                                        {sorter === cell.key ? (
                                            isDescending ? (
                                                <ChevronDownIcon className="icon-2" />
                                            ) : (
                                                <ChevronUpIcon className="icon-2" />
                                            )
                                        ) : (
                                            <ChevronsUpDownIcon className="icon-2" />
                                        )}
                                    </Button>
                                ) : (
                                    <span className="px-3">
                                        {formatContent(cell.label, 15)}
                                    </span>
                                )}
                            </TableHead>
                        )
                )}
            </TableRow>
        </TableHeader>
    );
}
