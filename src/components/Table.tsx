import {
    Table as T,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn, formatContent, getTableBody } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
    AdminTableLabel,
    HeaderProps,
    BodyProps,
    TableProps,
} from '@/lib/definitions';
import { Button } from './ui/button';
import {
    ChevronDownIcon,
    ChevronsUpDownIcon,
    ChevronUpIcon,
} from 'lucide-react';
import _ from 'lodash';
import Toolbar from './Toolbar';

const ID_KEY = 0;

const Header = ({
    attributes,
    body,
    renderCheckbox,
    allSelected,
    onClick,
    sorter,
    handleChangeSorter,
    isDescending,
    shouldSubmit,
}: HeaderProps) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-background">
                {renderCheckbox && body.length !== 0 && (
                    <TableHead>
                        <Checkbox
                            className="w-5 h-5"
                            name={shouldSubmit ? 'allIds' : ''}
                            value={body.map(
                                (item) => item[ID_KEY].content as string
                            )}
                            checked={allSelected}
                            onClick={onClick}
                        />
                    </TableHead>
                )}
                {attributes.map(
                    (cell) =>
                        (cell.shouldRender ?? true) && (
                            <TableHead
                                key={cell.label}
                                className={cell.className}
                            >
                                {sorter ? (
                                    <Button
                                        type="button"
                                        className="cursor-pointer"
                                        variant={'ghost'}
                                        onClick={() =>
                                            handleChangeSorter!(
                                                cell.key as AdminTableLabel
                                            )
                                        }
                                    >
                                        <span>
                                            {formatContent(cell.label, 15)}
                                        </span>
                                        {sorter === cell.key ? (
                                            isDescending ? (
                                                <ChevronDownIcon className="icon-2" />
                                            ) : (
                                                <ChevronUpIcon className="icon-2" />
                                            )
                                        ) : (
                                            <ChevronsUpDownIcon className="icon-2" />
                                        )}
                                    </Button>
                                ) : (
                                    <span className="px-3">
                                        {formatContent(cell.label, 15)}
                                    </span>
                                )}
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
    shouldSubmit,
}: BodyProps) => {
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
                        (cell) =>
                            cell.shouldRender && (
                                <TableCell
                                    key={cell.label}
                                    className={cn(
                                        cell.className,
                                        url ? 'p-0 px-3' : 'py-4 px-5'
                                    )}
                                >
                                    {url ? (
                                        <a
                                            href={
                                                Array.isArray(url)
                                                    ? `/${url[1]}/${row[1].content}/${url[0]}/${row[0].content}`
                                                    : `/${url}/${row[0].content}`
                                            }
                                            className=" block px-2 py-4"
                                        >
                                            {formatContent(cell.content)}
                                        </a>
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
    data,
    attributes,
    toolbarSlot,
    buttons,
    slot,
    renderCheckbox = false,
    shouldSort = false,
    shouldSubmit = true,
    handleMarkToRemove,
}: TableProps) {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [sorter, setSorter] = useState(
        shouldSort ? attributes[2].key : undefined
    );
    const [isDescending, setIsDescending] = useState(true);
    const handleChangeSorter = (label: string) => {
        setSorter(label);
        setIsDescending(!isDescending);
    };

    const body = getTableBody(attributes, data, sorter, isDescending);
    const allSelected = body.length === selectedRows.length;

    const handleAllSelected = () => {
        setSelectedRows(
            allSelected ? [] : body.map((row) => row[ID_KEY].content as string)
        );
    };

    const handleSelect = (id: string) => {
        setSelectedRows(
            selectedRows.includes(id)
                ? selectedRows.filter((rowId) => rowId !== id)
                : [...selectedRows, id]
        );
    };
    useEffect(() => {
        setSelectedRows([]);
    }, [data]);

    return (
        <section>
            {slot}
            {buttons && (
                <Toolbar
                    isDisabled={selectedRows.length === 0}
                    buttons={buttons}
                    shouldSubmit={shouldSubmit}
                    handleMarkToRemove={handleMarkToRemove}
                    selectedRows={selectedRows}
                    slot={toolbarSlot}
                />
            )}

            <T>
                <Header
                    attributes={attributes}
                    body={body}
                    renderCheckbox={renderCheckbox}
                    allSelected={allSelected}
                    onClick={handleAllSelected}
                    sorter={sorter}
                    handleChangeSorter={handleChangeSorter}
                    isDescending={isDescending}
                    shouldSubmit={shouldSubmit}
                />
                {data.length !== 0 && (
                    <Body
                        body={body}
                        url={url}
                        renderCheckbox={renderCheckbox}
                        handleSelect={handleSelect}
                        selectedRows={selectedRows}
                        shouldSubmit={shouldSubmit}
                    />
                )}
            </T>
        </section>
    );
}
