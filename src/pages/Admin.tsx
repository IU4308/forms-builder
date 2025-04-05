import Table from '@/components/Table';
import { AdminToolbar } from '@/components/toolbars';
import { adminTableAttributes } from '@/lib/constants';
import { getTableBody } from '@/lib/utils';
import { Form, useLoaderData } from 'react-router';

export default function Admin() {
    const { users } = useLoaderData();
    return (
        <Form action={'/admin'} method="post">
            <h1>Users</h1>
            <Table
                slot={<AdminToolbar />}
                body={getTableBody(adminTableAttributes, users)}
                renderCheckbox={true}
            />
        </Form>
    );
}
