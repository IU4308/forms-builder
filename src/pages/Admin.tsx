import Table from '@/components/Table';
import { AdminToolbar } from '@/components/toolbars';
import { users } from '@/lib/constants';
import { getTableBody, getTableHead } from '@/lib/utils';
import { useLoaderData } from 'react-router';

const attributes = [
    ['name', ''],
    ['email', ''],
    ['registered_at', ''],
    ['is_blocked', 'text-right'],
    ['is_admin', 'text-right'],
];

export default function Admin() {
    const { user } = useLoaderData();
    console.log(user);
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
