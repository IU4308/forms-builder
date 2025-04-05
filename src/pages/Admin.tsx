import Table from '@/components/Table';
import { AdminToolbar } from '@/components/toolbars';
import { adminTableAttributes } from '@/lib/constants';
import { getTableBody } from '@/lib/utils';
import { useLoaderData } from 'react-router';

export default function Admin() {
    const { users } = useLoaderData();
    return (
        <div>
            <h1>Users</h1>
            <Table
                slot={<AdminToolbar />}
                body={getTableBody(adminTableAttributes, users)}
                renderCheckbox={true}
            />
        </div>
    );
}
