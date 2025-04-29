import { adminButtons, adminTableAttributes } from '@/lib/constants.tsx';
import { Form, useLoaderData } from 'react-router';
import _ from 'lodash';
import { User } from '@/lib/definitions';
import AppTable from '@/components/app-table/AppTable';
import { useTranslation } from 'react-i18next';
import { translateArray } from '@/lib/utils';

export default function Admin() {
    const { users } = useLoaderData() as { users: User[] };
    const { t: translator } = useTranslation();

    // const adminTableAttributes = translateArray(
    //     rawAdminTableAttributes,
    //     ['label'],
    //     t
    // );

    // const adminButtons = translateArray(
    //     rawAdminButtons,
    //     ['label', 'description'],
    //     t
    // );

    return (
        <Form action={'/admin'} method="post">
            <h1>Users</h1>
            <AppTable
                data={users}
                attributes={translateArray(
                    adminTableAttributes,
                    ['label'],
                    translator
                )}
                buttons={translateArray(
                    adminButtons,
                    ['label', 'description'],
                    translator
                )}
                renderCheckbox={true}
                shouldSort={true}
            />
        </Form>
    );
}
