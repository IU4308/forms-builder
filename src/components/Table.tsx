import {
    Table as T,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn, formatContent, getTableBody, setSentenceCase } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Cell,
    AdminTableLabel,
    TableAttributes,
    ToolbarButton,
} from '@/lib/definitions';
import { Button } from './ui/button';
import {
    ChevronDownIcon,
    ChevronsUpDownIcon,
    ChevronUpIcon,
} from 'lucide-react';
import _ from 'lodash';
import Toolbar from './Toolbar';

const Header = ({
    attributes,
    body,
    renderCheckbox,
    allSelected,
    onClick,
    sorter,
    handleChangeSorter,
    isDescending,
}: {
    attributes: TableAttributes;
    body: Cell[][];
    renderCheckbox?: boolean;
    allSelected?: boolean;
    onClick?: () => void;
    sorter?: string;
    handleChangeSorter?: (label: string) => void;
    isDescending?: boolean;
}) => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-background">
                {renderCheckbox && body.length !== 0 && (
                    <TableHead>
                        <Checkbox
                            className="w-5 h-5"
                            name="allIds"
                            value={body.map(
                                (item) => item[0].content as string
                            )}
                            checked={allSelected}
                            onClick={onClick}
                        />
                    </TableHead>
                )}
                {attributes.map(
                    (cell, index) =>
                        (cell.shouldRender ?? true) && (
                            <TableHead key={index} className={cell.className}>
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
                                            {setSentenceCase(cell.label)}
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
                                    <span>{setSentenceCase(cell.label)}</span>
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
}: {
    url?: string | string[];
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
                                name="id"
                                className="w-5 h-5"
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
                                            {formatContent(cell.content).slice(
                                                0,
                                                25
                                            )}
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
    buttons,
    slot,
    renderCheckbox = false,
    shouldSort = false,
}: {
    url?: string | string[];
    data: { [key: string]: any }[];
    attributes: TableAttributes;
    buttons?: ToolbarButton[];
    slot?: ReactNode;
    renderCheckbox?: boolean;
    shouldSort?: boolean;
}) {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [sorter, setSorter] = useState(
        shouldSort ? attributes[1].key : undefined
    );
    const [isDescending, setIsDescending] = useState(true);
    const handleChangeSorter = (label: string) => {
        setSorter(label);
        setIsDescending(!isDescending);
    };

    const body = getTableBody(attributes, data, sorter, isDescending);
    console.log(body);
    const allSelected = body.length === selectedRows.length;

    const handleAllSelected = () => {
        setSelectedRows(allSelected ? [] : _.range(body.length));
    };

    const handleSelect = (index: number) => {
        setSelectedRows(
            selectedRows.includes(index)
                ? selectedRows.filter((rowIndex) => rowIndex !== index)
                : [...selectedRows, index]
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
                />
                {data.length !== 0 && (
                    <Body
                        body={body}
                        url={url}
                        renderCheckbox={renderCheckbox}
                        handleSelect={handleSelect}
                        selectedRows={selectedRows}
                    />
                )}
            </T>
        </section>
    );
}
