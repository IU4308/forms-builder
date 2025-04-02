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

type Cell = {
    content: string | ReactNode;
    className?: string;
};

export default function Table({
    url,
    head,
    body,
    slot,
}: {
    url: string;
    head: Cell[];
    body: Cell[];
    slot?: ReactNode;
}) {
    return (
        <section className="">
            {slot}
            <T>
                <TableHeader>
                    <TableRow>
                        {head.map((item) => (
                            <TableHead className={item.className}>
                                {item.content}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        {body.map((item) => (
                            <TableCell className={item.className + ' p-0'}>
                                <Link to={url} className=" block p-2">
                                    {item.content}
                                </Link>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </T>
        </section>
    );
}
