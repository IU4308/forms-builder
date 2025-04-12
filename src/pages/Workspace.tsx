import Table from '@/components/Table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    formsTableAttributes,
    templatesTableAttributes,
    workspaceButtons,
} from '@/lib/constants.tsx';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Form, useLoaderData } from 'react-router';

export default function Workspace() {
    const { templates, forms } = useLoaderData();
    const [tabId, setTabId] = useState(0);
    return (
        <Form action="/workspace" method="post">
            <Input
                hidden
                readOnly
                name="action"
                value={tabId === 0 ? 'templates' : 'forms'}
            />
            <div className="mb-4 flex gap-2 justify-center">
                <Button
                    type="button"
                    variant={!tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(0)}
                >
                    Templates
                </Button>
                <Button
                    type="button"
                    variant={tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(1)}
                >
                    Forms
                </Button>
            </div>
            <div className={cn('visible', tabId !== 0 && 'hidden')}>
                <Table
                    data={templates}
                    attributes={templatesTableAttributes}
                    buttons={workspaceButtons}
                    renderCheckbox={true}
                    shouldSort={true}
                    url="templates"
                />
            </div>
            <div className={cn('visible', tabId !== 1 && 'hidden')}>
                <Table
                    data={forms}
                    attributes={formsTableAttributes}
                    buttons={workspaceButtons}
                    renderCheckbox={true}
                    shouldSort={true}
                    url={['forms', 'templates']}
                />
            </div>
        </Form>
    );
}
