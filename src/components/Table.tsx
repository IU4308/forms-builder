import {
    Table as T,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn, formatHead, formatContent } from '@/lib/utils';
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
    url?: string;
    head: Row;
    body: Row[];
    slot?: ReactNode;
    renderCheckbox?: boolean;
}) {
    console.log(body[0][4].content.toString());
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
                                {formatHead(cell.content)}
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
                                    className={cn(
                                        cell.className,
                                        url ? 'p-0' : 'py-4'
                                    )}
                                >
                                    {url ? (
                                        <Link
                                            to={url}
                                            className=" block px-2 py-4"
                                        >
                                            {cell.content}
                                        </Link>
                                    ) : (
                                        formatContent(cell.content)
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </T>
        </section>
    );
}
