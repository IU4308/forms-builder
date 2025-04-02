import {
    Table as T,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { format } from '@/lib/utils';
import { ReactNode } from 'react';
import { Link } from 'react-router';
import { Checkbox } from '@/components/ui/checkbox';

type Row = {
    content: string;
    className: string;
}[];

export default function Table({
    url,
    head,
    body,
    slot,
    renderCheckbox = false,
}: {
    url: string;
    head: Row;
    body: Row[];
    slot?: ReactNode;
    renderCheckbox?: boolean;
}) {
    return (
        <section>
            {slot}
            <T>
                <TableHeader>
                    <TableRow>
                        {renderCheckbox && (
                            <TableHead>
                                <Checkbox />
                            </TableHead>
                        )}
                        {head.map((cell, index) => (
                            <TableHead key={index} className={cell.className}>
                                {format(cell.content)}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {body.map((row, index) => (
                        <TableRow key={index}>
                            {renderCheckbox && (
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                            )}
                            {row.map((cell, index) => (
                                <TableCell
                                    key={index}
                                    className={cell.className + ' p-0'}
                                >
                                    <Link to={url} className=" block p-2">
                                        {cell.content}
                                    </Link>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </T>
        </section>
    );
}
