import Table from '@/components/Table';
import { AdminToolbar } from '@/components/toolbars';
import { adminTableAttributes } from '@/lib/constants';
import { getTableBody, sortUsers } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Form, useLoaderData } from 'react-router';
import _ from 'lodash';
import { User } from '@/lib/definitions';

export default function Admin() {
    const { users } = useLoaderData() as { users: User[] };
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const body = getTableBody(
        adminTableAttributes,
        sortUsers(users, 'isBlocked', false)
    );
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
    }, [users]);

    return (
        <Form action={'/admin'} method="post">
            <h1>Users</h1>
            <Table
                slot={<AdminToolbar selectedRows={selectedRows} />}
                body={body}
                renderCheckbox={true}
                allSelected={allSelected}
                handleAllSelected={handleAllSelected}
                selectedRows={selectedRows}
                handleSelect={handleSelect}
            />
        </Form>
    );
}
