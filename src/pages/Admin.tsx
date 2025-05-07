import { adminButtons, adminTableAttributes } from '@/lib/constants.tsx';
import { Form, useLoaderData } from 'react-router';
import _ from 'lodash';
import { User } from '@/lib/definitions';
import AppTable from '@/components/app-table/AppTable';
import { useTranslation } from 'react-i18next';
import { translateData } from '@/lib/utils';

export default function Admin() {
    const { users } = useLoaderData() as { users: User[] };
    const { t: translator } = useTranslation();

    return (
        <Form action={'/admin'} method="post">
            <h1>Users</h1>
            <AppTable
                data={users}
                attributes={translateData(
                    adminTableAttributes,
                    ['label'],
                    translator
                )}
                buttons={translateData(
                    adminButtons,
                    ['label', 'description'],
                    translator
                )}
                routes="workspace"
                renderCheckbox={true}
                shouldSort={true}
            />
        </Form>
    );
}
