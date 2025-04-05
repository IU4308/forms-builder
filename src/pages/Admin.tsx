import Table from '@/components/Table';
import { AdminToolbar } from '@/components/toolbars';
import { getTableBody, getTableHead } from '@/lib/utils';
import { useLoaderData } from 'react-router';

const attributes = [
    ['id', '', false],
    ['name', '', true],
    ['email', '', true],
    ['createdAt', '', true],
    ['lastLogin', '', true],
    ['isBlocked', 'text-right', true],
    ['isAdmin', 'text-right', true],
];

// const attr = [
//     {
//         label: 'id',
//         classname: '',
//         shouldRender: false,
//     },
//     {
//         label: 'name',
//         classname: '',
//         shouldRender: true,
//     },
//     {
//         label: 'email',
//         classname: '',
//         shouldRender: true,
//     },
//     {
//         label: 'createdAt',
//         classname: '',
//         shouldRender: true,
//     },
//     {
//         label: 'lastLogin',
//         classname: '',
//         shouldRender: true,
//     },
//     {
//         label: 'isBlocked',
//         classname: 'text-right',
//         shouldRender: true,
//     },
//     {
//         label: 'isAdmin',
//         classname: 'text-right',
//         shouldRender: true,
//     }
// ]

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
