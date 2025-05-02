import { TableBody, TableRow } from '@/components/ui/table';
import { BodyProps } from '@/lib/definitions';
import _ from 'lodash';
import TableCheckbox from './table-checkbox';
import TableCellWrapper from './TableCellWrapper';

const ID_KEY = 0;

export default function AppTableBody({
    body,
    renderCheckbox,
    url,
    selectedRows,
    handleSelect,
    shouldSubmit,
}: BodyProps) {
    return (
        <TableBody>
            {body.map((row) => {
                const rowId = row[ID_KEY].content as string;
                return (
                    <TableRow key={rowId}>
                        {renderCheckbox && (
                            <TableCheckbox
                                name={shouldSubmit ? 'id' : ''}
                                value={rowId}
                                onSelect={() => handleSelect!(rowId)}
                                isChecked={selectedRows?.includes(rowId)}
                            />
                        )}
                        {row.map((cell, index) => (
                            <TableCellWrapper
                                key={index}
                                cell={cell}
                                index={index}
                                url={url}
                                row={row}
                            />
                        ))}
                    </TableRow>
                );
            })}
        </TableBody>
    );
}
