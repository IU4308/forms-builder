import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn, formatContent } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { BodyProps } from '@/lib/definitions';
import _ from 'lodash';
import { Link } from 'react-router';

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
            {body.map((row) => (
                <TableRow key={row[ID_KEY].content as string}>
                    {renderCheckbox && (
                        <TableCell>
                            <Checkbox
                                name={shouldSubmit ? 'id' : ''}
                                className="w-5 h-5"
                                value={row[ID_KEY].content as string}
                                checked={selectedRows?.includes(
                                    row[ID_KEY].content as string
                                )}
                                onClick={() =>
                                    handleSelect!(row[ID_KEY].content as string)
                                }
                            />
                        </TableCell>
                    )}
                    {row.map(
                        (cell, index) =>
                            cell.shouldRender && (
                                <TableCell
                                    key={index}
                                    className={cn(
                                        cell.className,
                                        url ? 'p-0 px-3' : 'py-4 px-5'
                                    )}
                                >
                                    {url ? (
                                        <Link
                                            to={
                                                Array.isArray(url)
                                                    ? `/${url[1]}/${row[1].content}/${url[0]}/${row[0].content}`
                                                    : `/${url}/${row[0].content}`
                                            }
                                            reloadDocument
                                            className=" block px-2 py-4"
                                        >
                                            {formatContent(cell.content)}
                                        </Link>
                                    ) : (
                                        formatContent(cell.content)
                                    )}
                                </TableCell>
                            )
                    )}
                </TableRow>
            ))}
        </TableBody>
    );
}
