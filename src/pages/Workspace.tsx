import AdditionalInfo from '@/components/AdditionalInfo';
import AppTable from '@/components/app-table/AppTable';
import ExportResults from '@/components/ExportResults';
import TabPanel from '@/components/TabPanel';
import { Button } from '@/components/ui/button';
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
import { Form, useLoaderData, useParams } from 'react-router';

export default function Workspace() {
    const { userId } = useParams();
    const { t: translator } = useTranslation();
    const { templates, forms, currentUser, owner } = useLoaderData();
    const [tabId, setTabId] = useState(1);
    return (
        <div className="max-w-[768px] mx-auto">
            {currentUser.isAdmin && (
                <h1 className="text-center mb-4">{owner.name}'s Workspace</h1>
            )}
            <ExportResults />
            <Form action={`/workspace/${userId}`} method="post">
                <Input
                    hidden
                    readOnly
                    name="route"
                    value={tabId === 1 ? 'templates' : 'forms'}
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
                        routes="templates"
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
                        routes={['forms', 'templates']}
                    />
                )}
            </Form>
            {tabId === 3 && <AdditionalInfo />}
        </div>
    );
}
