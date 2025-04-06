import {
    Table as T,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn, formatContent, setSentenceCase } from '@/lib/utils';
import { ReactNode } from 'react';
import { Link } from 'react-router';
import { Checkbox } from '@/components/ui/checkbox';
import { Cell } from '@/lib/definitions';

const Header = ({
    body,
    renderCheckbox,
    allSelected,
    onClick,
}: {
    body: Cell[][];
    renderCheckbox?: boolean;
    allSelected?: boolean;
    onClick?: () => void;
}) => {
    return (
        <TableHeader>
            <TableRow>
                {renderCheckbox && (
                    <TableHead>
                        <Checkbox
                            name="allUserIds"
                            value={body.map(
                                (item) => item[0].content as string
                            )}
                            checked={allSelected}
                            onClick={onClick}
                        />
                    </TableHead>
                )}
                {body[0].map(
                    (cell, index) =>
                        cell.shouldRender && (
                            <TableHead key={index} className={cell.className}>
                                {setSentenceCase(cell.label)}
                            </TableHead>
                        )
                )}
            </TableRow>
        </TableHeader>
    );
};

const Body = ({
    body,
    renderCheckbox,
    url,
    selectedRows,
    handleSelect,
}: {
    url?: string;
    body: Cell[][];
    renderCheckbox?: boolean;
    selectedRows?: number[];
    handleSelect?: (index: number) => void;
}) => {
    return (
        <TableBody>
            {body.map((row, index) => (
                <TableRow key={row[0].content as string}>
                    {renderCheckbox && (
                        <TableCell>
                            <Checkbox
                                name="userId"
                                value={row[0].content as string}
                                checked={selectedRows?.includes(index)}
                                onClick={() => handleSelect!(index)}
                            />
                        </TableCell>
                    )}
                    {row.map(
                        (cell) =>
                            cell.shouldRender && (
                                <TableCell
                                    key={cell.label}
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
};

export default function Table({
    url,
    body,
    slot,
    renderCheckbox = false,
    allSelected,
    selectedRows,
    handleAllSelected,
    handleSelect,
}: {
    url?: string;
    body: Cell[][];
    slot?: ReactNode;
    renderCheckbox?: boolean;
    allSelected?: boolean;
    handleAllSelected?: () => void;
    handleSelect?: (index: number) => void;
    selectedRows?: number[];
}) {
    return (
        <section>
            {slot}
            <T>
                <Header
                    body={body}
                    renderCheckbox={renderCheckbox}
                    allSelected={allSelected}
                    onClick={handleAllSelected}
                />
                <Body
                    body={body}
                    url={url}
                    renderCheckbox={renderCheckbox}
                    handleSelect={handleSelect}
                    selectedRows={selectedRows}
                />
            </T>
        </section>
    );
}
