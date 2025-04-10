import CustomForm from '@/components/CustomForm';
import FormResponse from '@/components/FormResponse';
import FormSettings from '@/components/FormSettings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router';

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
    const fetcher = useFetcher();
    const { templateId, formId } = useParams();
    const [tabId, setTabId] = useState(1);
    const { currentUser, mode, canEdit } = useLoaderData();
    const [activeId, setActiveId] = useState('');

    let action = '/templates';
    if (templateId !== undefined) {
        action += `/${templateId}` + (mode === 'form' ? '/forms' : '');
    }

    if (formId !== undefined) action += `/${formId}`;

    return (
        <fetcher.Form
            action={action}
            method="post"
            onClick={() => setActiveId('')}
        >
            <div className="max-w-[768px] mx-auto flex flex-col gap-4">
                <Input
                    hidden
                    readOnly
                    name="creatorId"
                    value={currentUser.userId}
                />
                {mode === 'form' && (
                    <Input
                        hidden
                        readOnly
                        name="templateId"
                        value={templateId}
                    />
                )}
                {mode === 'template' && (
                    <>
                        <div className="flex justify-center">
                            <Button type="submit" variant={'outline'}>
                                <span>
                                    {templateId === undefined
                                        ? 'Publish Template'
                                        : 'Save changes'}
                                </span>
                            </Button>
                        </div>
                        <TabButtons tabId={tabId} setTabId={setTabId} />
                        <div className={cn('visible', tabId !== 0 && 'hidden')}>
                            <FormSettings />
                        </div>
                    </>
                )}
                {fetcher?.data?.formResponse ? (
                    <FormResponse {...fetcher.data.formResponse} />
                ) : (
                    <div
                        className={cn(
                            'visible flex flex-col gap-4',
                            tabId !== 1 && 'hidden'
                        )}
                    >
                        <CustomForm
                            mode={mode}
                            activeId={activeId}
                            setActiveId={setActiveId}
                        />
                        {mode === 'form' && canEdit && (
                            <div>
                                <Button type="submit">Submit</Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </fetcher.Form>
    );
}
