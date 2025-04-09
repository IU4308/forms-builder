import Table from '@/components/Table';
import { Button } from '@/components/ui/button';
import UserForms from '@/components/UserForms';
import {
    templatesTableAttributes,
    workspaceButtons,
} from '@/lib/constants.tsx';
import { useState } from 'react';
import { useLoaderData } from 'react-router';

export default function Workspace() {
    const { templates } = useLoaderData();
    const [tabId, setTabId] = useState(0);
    return (
        <div>
            <div className="mb-4 flex gap-2 justify-center">
                <Button
                    variant={!tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(0)}
                >
                    Templates
                </Button>
                <Button
                    variant={tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(1)}
                >
                    Forms
                </Button>
            </div>
            {!tabId && (
                <Table
                    data={templates}
                    attributes={templatesTableAttributes}
                    buttons={workspaceButtons}
                    renderCheckbox={true}
                    shouldSort={true}
                    url="/templates"
                />
            )}
            {tabId === 1 && <UserForms />}
        </div>
    );
}
