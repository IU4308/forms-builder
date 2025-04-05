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
    label: string;
    content: string;
    className: string;
    shouldRender: boolean;
}[];

export default function Table({
    url,
    body,
    slot,
    renderCheckbox = false,
}: {
    url?: string;
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
                        {body[0].map(
                            (cell, index) =>
                                cell.shouldRender && (
                                    <TableHead
                                        key={index}
                                        className={cell.className}
                                    >
                                        {formatHead(cell.label)}
                                    </TableHead>
                                )
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {body.map((row, index) => (
                        <TableRow key={index}>
                            {renderCheckbox && (
                                <TableCell>
                                    <Checkbox
                                        name="userId"
                                        value={row[0].content}
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
                                                url ? 'p-0' : 'py-4'
                                            )}
                                        >
                                            {url ? (
                                                <Link
                                                    to={url}
                                                    className=" block px-2 py-4"
                                                >
                                                    {formatContent(
                                                        cell.content
                                                    )}
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
            </T>
        </section>
    );
}
