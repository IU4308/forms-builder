import AppTable from '@/components/app-table/AppTable';
import TabPanel from '@/components/TabPanel';
import { Input } from '@/components/ui/input';
import {
    formsTableAttributes,
    templatesTableAttributes,
    workspaceTemplateButtons,
    workspaceFormsButtons,
    workspaceTabButtons,
} from '@/lib/constants.tsx';
import { translateData } from '@/lib/utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useLoaderData } from 'react-router';

export default function Workspace() {
    const { t: translator } = useTranslation();
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
                buttons={translateData(
                    workspaceTabButtons,
                    ['label'],
                    translator
                )}
                tabId={tabId}
                setTabId={setTabId}
                className="mb-4"
            />
            {tabId === 1 && (
                <AppTable
                    data={templates}
                    attributes={translateData(
                        templatesTableAttributes,
                        ['label'],
                        translator
                    )}
                    buttons={translateData(
                        workspaceTemplateButtons,
                        ['label', 'description'],
                        translator
                    )}
                    renderCheckbox={true}
                    shouldSort={true}
                    url="templates"
                />
            )}
            {tabId === 2 && (
                <AppTable
                    data={forms}
                    attributes={translateData(
                        formsTableAttributes,
                        ['label'],
                        translator
                    )}
                    buttons={translateData(
                        workspaceFormsButtons,
                        ['label', 'description'],
                        translator
                    )}
                    renderCheckbox={true}
                    shouldSort={true}
                    url={['forms', 'templates']}
                />
            )}
        </Form>
    );
}
