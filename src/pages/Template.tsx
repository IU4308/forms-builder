import CustomForm from '@/components/CustomForm';
import FormSettings from '@/components/FormSettings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Form, useLoaderData } from 'react-router';

export default function Template() {
    const [tabId, setTabId] = useState(0);
    const { currentUser } = useLoaderData();
    return (
        <Form
            action="/templates"
            method="post"
            className="max-w-[768px] mx-auto"
        >
            <Input
                hidden
                name="creatorId"
                value={currentUser.userId}
                readOnly
            />
            <div className="mb-4 flex gap-2 justify-center">
                <Button
                    type="button"
                    variant={!tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(0)}
                >
                    Settings
                </Button>
                <Button
                    type="button"
                    variant={tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(1)}
                >
                    Questions
                </Button>
            </div>
            <div className={cn('visible', tabId !== 0 && 'hidden')}>
                <FormSettings />
            </div>
            <div className={cn('visible', tabId !== 1 && 'hidden')}>
                <CustomForm />
            </div>
        </Form>
    );
}
