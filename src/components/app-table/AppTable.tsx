import { Table } from '@/components/ui/table';
import { getTableBody } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { TableProps } from '@/lib/definitions';
import _ from 'lodash';
import AppTableHeader from './table-header';
import AppTableBody from './table-body';
import Toolbar from './toolbar/Toolbar';

const ID_KEY = 0;

export default function AppTable({
    routes,
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
    console.log(body);
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

            <Table>
                <AppTableHeader
                    attributes={attributes}
                    body={body}
                    renderCheckbox={renderCheckbox}
                    allSelected={allSelected}
                    onSelectAll={handleAllSelected}
                    sorter={sorter}
                    handleChangeSorter={handleChangeSorter}
                    isDescending={isDescending}
                    shouldSubmit={shouldSubmit}
                />
                {data.length !== 0 && (
                    <AppTableBody
                        body={body}
                        routes={routes}
                        renderCheckbox={renderCheckbox}
                        handleSelect={handleSelect}
                        selectedRows={selectedRows}
                        shouldSubmit={shouldSubmit}
                    />
                )}
            </Table>
        </section>
    );
}
