import { cn, formatContent } from '@/lib/utils';
import { Link } from 'react-router';
import { TableCell } from '../ui/table';

export default function TableCellWrapper({
    cell,
    index,
    url,
    row,
}: {
    cell: any;
    index: number;
    url?: string | string[];
    row: any[];
}) {
    if (!cell.shouldRender) return null;

    const cellContent = url ? (
        <Link
            to={
                Array.isArray(url)
                    ? `/${url[1]}/${row[1].content}/${url[0]}/${row[0].content}`
                    : `/${url}/${row[0].content}`
            }
            reloadDocument
            className="block px-2 py-4"
        >
            {formatContent(cell.content)}
        </Link>
    ) : (
        formatContent(cell.content)
    );

    return (
        <TableCell
            key={index}
            className={cn(cell.className, url ? 'p-0 px-3' : 'py-4 px-5')}
        >
            {cellContent}
        </TableCell>
    );
}
