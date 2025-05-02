import { cn, formatContent } from '@/lib/utils';
import { Link } from 'react-router';
import { TableCell } from '../ui/table';

export default function TableCellWrapper({
    cell,
    index,
    routes,
    row,
}: {
    cell: any;
    index: number;
    routes?: string | string[];
    row: any[];
}) {
    if (!cell.shouldRender) return null;

    const cellContent = routes ? (
        <Link
            to={
                Array.isArray(routes)
                    ? `/${routes[1]}/${row[1].content}/${routes[0]}/${row[0].content}`
                    : `/${routes}/${row[0].content}`
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
            className={cn(cell.className, routes ? 'p-0 px-3' : 'py-4 px-5')}
        >
            {cellContent}
        </TableCell>
    );
}
