import Table from '@/components/Table';
import { adminButtons, adminTableAttributes } from '@/lib/constants.tsx';
import { Form, useLoaderData } from 'react-router';
import _ from 'lodash';
import { User } from '@/lib/definitions';

export default function Admin() {
    const { users } = useLoaderData() as { users: User[] };

    return (
        <Form action={'/admin'} method="post">
            <h1>Users</h1>
            <Table
                data={users}
                attributes={adminTableAttributes}
                buttons={adminButtons}
                renderCheckbox={true}
                shouldSort={true}
            />
        </Form>
    );
}
