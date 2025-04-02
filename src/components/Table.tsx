import {
    Table as T,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ReactNode } from 'react';
import { Link } from 'react-router';

type Row = {
    content: string | ReactNode;
    className?: string;
}[];

export default function Table({
    url,
    head,
    body,
    slot,
}: {
    url: string;
    head: Row;
    body: Row[];
    slot?: ReactNode;
}) {
    return (
        <section>
            {slot}
            <T>
                <TableHeader>
                    <TableRow>
                        {head.map((item, index) => (
                            <TableHead key={index} className={item.className}>
                                {item.content}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {body.map((row, index) => (
                        <TableRow key={index}>
                            {row.map((item, index) => (
                                <TableCell
                                    key={index}
                                    className={item.className + ' p-0'}
                                >
                                    <Link to={url} className=" block p-2">
                                        {item.content}
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
