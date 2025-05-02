import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatContent } from '@/lib/utils';
import { HeaderProps } from '@/lib/definitions';
import _ from 'lodash';
import SorterHead from './SorterHead';
import TableCheckbox from './table-checkbox';

const ID_KEY = 0;

export default function AppTableHeader({
    attributes,
    body,
    renderCheckbox,
    allSelected,
    onSelectAll,
    sorter,
    handleChangeSorter,
    isDescending,
    shouldSubmit,
}: HeaderProps) {
    return (
        <TableHeader>
            <TableRow className="hover:bg-background">
                {renderCheckbox && body.length !== 0 && (
                    <TableCheckbox
                        name={shouldSubmit ? 'allIds' : ''}
                        value={body.map(
                            (item) => item[ID_KEY].content as string
                        )}
                        onSelect={onSelectAll!}
                        isChecked={allSelected}
                    />
                )}
                {attributes.map(
                    (cell, index) =>
                        (cell.shouldRender ?? true) && (
                            <TableHead key={index} className={cell.className}>
                                {sorter ? (
                                    <SorterHead
                                        label={cell.label as string}
                                        onChangeSorter={() =>
                                            handleChangeSorter!(cell.key)
                                        }
                                        isSorter={sorter === cell.key}
                                        isDescending={isDescending!}
                                    />
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
