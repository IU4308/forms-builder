import Table from '@/components/Table';
import { WorkspaceToolbar } from '@/components/toolbars';
import { Button } from '@/components/ui/button';
import UserForms from '@/components/UserForms';
import { templates } from '@/lib/constants';
import { getTableBody, getTableHead } from '@/lib/utils';
import { useState } from 'react';

const templatesAttributes = [
    ['title', ''],
    ['created_at', ''],
    ['updated_at', ''],
    ['submissions', 'text-right'],
];

export default function Workspace() {
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
                    slot={<WorkspaceToolbar />}
                    head={getTableHead(templatesAttributes)}
                    body={getTableBody(templatesAttributes, templates)}
                    renderCheckbox={true}
                    url="/templates/1"
                />
            )}
            {tabId === 1 && <UserForms />}
        </div>
    );
}
