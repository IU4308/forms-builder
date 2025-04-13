import CustomForm from '@/components/CustomForm';
import FormResponse from '@/components/FormResponse';
import FormSettings from '@/components/FormSettings';
import Table from '@/components/Table';
import TabPanel from '@/components/TabPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    templateFormsTableAttributes,
    templateTabButtons,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router';

export default function Template() {
    const fetcher = useFetcher();
    const { templateId, formId } = useParams();
    const [tabId, setTabId] = useState(2);
    const { currentUser, mode, canEdit, templateForms } = useLoaderData();
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
            encType="multipart/form-data"
            onClick={() => setActiveId('')}
        >
            {fetcher?.data?.formResponse ? (
                <FormResponse {...fetcher.data.formResponse} />
            ) : (
                <div className="max-w-[768px] mx-auto flex flex-col gap-4">
                    {formId === undefined && (
                        <Input
                            hidden
                            readOnly
                            name={
                                mode === 'template' ? 'creatorId' : 'authorId'
                            }
                            value={currentUser.userId}
                        />
                    )}
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
                            <TabPanel
                                buttons={templateTabButtons}
                                tabId={tabId}
                                setTabId={setTabId}
                            />
                            <div
                                className={cn(
                                    'visible',
                                    tabId !== 1 && 'hidden'
                                )}
                            >
                                <FormSettings />
                            </div>
                            {templateId !== undefined && (
                                <div
                                    className={cn(
                                        'visible',
                                        tabId !== 3 && 'hidden'
                                    )}
                                >
                                    <Table
                                        data={templateForms}
                                        attributes={
                                            templateFormsTableAttributes
                                        }
                                        shouldSort={true}
                                        url={`templates/${templateId}/forms`}
                                    />
                                </div>
                            )}
                        </>
                    )}

                    <div
                        className={cn(
                            'visible flex flex-col gap-4',
                            tabId !== 2 && 'hidden'
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
                </div>
            )}
        </fetcher.Form>
    );
}
