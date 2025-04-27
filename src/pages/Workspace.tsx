import AppTable from '@/components/app-table/AppTable';
import TabPanel from '@/components/TabPanel';
import { Input } from '@/components/ui/input';
import {
    formsTableAttributes,
    templatesTableAttributes,
    workspaceButtons,
    workspaceFormsButtons,
    workspaceTabButtons,
} from '@/lib/constants.tsx';
import { useState } from 'react';
import { Form, useLoaderData } from 'react-router';

export default function Workspace() {
    const [templates, forms] = useLoaderData();
    const [tabId, setTabId] = useState(1);
    return (
        <Form
            action="/workspace"
            method="post"
            className="max-w-[768px] mx-auto"
        >
            <Input
                hidden
                readOnly
                name="action"
                value={tabId === 0 ? 'templates' : 'forms'}
            />
            <TabPanel
                buttons={workspaceTabButtons}
                tabId={tabId}
                setTabId={setTabId}
                className="mb-4"
            />
            {tabId === 1 && (
                <AppTable
                    data={templates}
                    attributes={templatesTableAttributes}
                    buttons={workspaceButtons}
                    renderCheckbox={true}
                    shouldSort={true}
                    url="templates"
                />
            )}
            {tabId === 2 && (
                <AppTable
                    data={forms}
                    attributes={formsTableAttributes}
                    buttons={workspaceFormsButtons}
                    renderCheckbox={true}
                    shouldSort={true}
                    url={['forms', 'templates']}
                />
            )}
        </Form>
    );
}
