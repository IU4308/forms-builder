import Table from '@/components/Table';
import { AdminToolbar } from '@/components/toolbars';
import { getTableBody, getTableHead } from '@/lib/utils';
import { useLoaderData } from 'react-router';

const attributes = [
    ['name', ''],
    ['email', ''],
    ['createdAt', ''],
    ['lastLogin', ''],
    ['isBlocked', 'text-right'],
    ['isAdmin', 'text-right'],
];

export default function Admin() {
    const { users } = useLoaderData();
    return (
        <div>
            <h1>Users</h1>
            <Table
                slot={<AdminToolbar />}
                head={getTableHead(attributes)}
                body={getTableBody(attributes, users)}
                renderCheckbox={true}
            />
        </div>
    );
}
