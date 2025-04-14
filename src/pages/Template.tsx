import CustomForm from '@/components/CustomForm';
import FormResponse from '@/components/FormResponse';
import FormSettings from '@/components/FormSettings';
import Table from '@/components/Table';
import TabPanel from '@/components/TabPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { templateTabButtons } from '@/lib/constants';
import { cn, getAnswersAttributes } from '@/lib/utils';
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router';

export default function Template() {
    const fetcher = useFetcher();
    const { templateId, formId } = useParams();
    const [tabId, setTabId] = useState(2);
    const { currentUser, mode, templateForms } = useLoaderData();
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
                <div className=" gap-4">
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
                            <div className="sticky z-30 top-[53px] bg-background py-2 flex flex-col gap-4 items-center">
                                <Button type="submit" variant={'outline'}>
                                    <span>
                                        {templateId === undefined
                                            ? 'Publish Template'
                                            : 'Save changes'}
                                    </span>
                                </Button>
                                <TabPanel
                                    buttons={templateTabButtons}
                                    tabId={tabId}
                                    setTabId={setTabId}
                                />
                            </div>
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
                                    {templateForms.length > 0 ? (
                                        <Table
                                            data={templateForms}
                                            attributes={getAnswersAttributes(
                                                templateForms[0]
                                            )}
                                            shouldSort={true}
                                            url={`templates/${templateId}/forms`}
                                        />
                                    ) : (
                                        <h1 className="flex justify-center">
                                            No answers
                                        </h1>
                                    )}
                                </div>
                            )}
                        </>
                    )}

                    <div className={cn('visible', tabId !== 2 && 'hidden')}>
                        <CustomForm
                            mode={mode}
                            activeId={activeId}
                            setActiveId={setActiveId}
                        />
                    </div>
                </div>
            )}
        </fetcher.Form>
    );
}
