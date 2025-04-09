import CustomForm from '@/components/CustomForm';
import FormSettings from '@/components/FormSettings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Form, useLoaderData } from 'react-router';

const TabButtons = ({
    tabId,
    setTabId,
}: {
    tabId: number;
    setTabId: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
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
    );
};

export default function Template() {
    const [tabId, setTabId] = useState(1);
    const { currentUser, mode } = useLoaderData();
    return (
        <Form
            action="/templates"
            method="post"
            className="max-w-[768px] mx-auto flex flex-col gap-4"
        >
            <Input
                hidden
                name="creatorId"
                value={currentUser.userId}
                readOnly
            />
            {mode === 'template' && (
                <>
                    <div className="flex justify-center">
                        <Button type="submit" variant={'outline'}>
                            Publish Template
                        </Button>
                    </div>
                    <TabButtons tabId={tabId} setTabId={setTabId} />
                    <div className={cn('visible', tabId !== 0 && 'hidden')}>
                        <FormSettings />
                    </div>
                </>
            )}
            <div className={cn('visible', tabId !== 1 && 'hidden')}>
                <CustomForm mode={mode} />
            </div>
        </Form>
    );
}
