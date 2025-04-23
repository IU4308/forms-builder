import CustomForm from '@/components/CustomForm';
import FormResponse from '@/components/FormResponse';
import FormSettings from '@/components/FormSettings';
import HiddenInputs from '@/components/HiddenInputs';
import Table from '@/components/Table';
import TemplateHeader from '@/components/TemplateHeader';
import { cn, getAnswersAttributes, getTemplateActionUrl } from '@/lib/utils';
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router';

export default function Template() {
    const { mode, templateForms } = useLoaderData();
    const { templateId, formId } = useParams();
    const [tabId, setTabId] = useState(2);
    const [activeId, setActiveId] = useState('');

    const fetcher = useFetcher();
    return (
        <fetcher.Form
            action={getTemplateActionUrl(templateId, formId, mode)}
            method="post"
            encType="multipart/form-data"
            onClick={() => setActiveId('')}
        >
            {fetcher?.data?.formResponse ? (
                <FormResponse {...fetcher.data.formResponse} />
            ) : (
                <div>
                    <HiddenInputs />
                    {mode === 'template' && (
                        <>
                            <TemplateHeader tabId={tabId} setTabId={setTabId} />
                            <div
                                className={cn(
                                    'visible',
                                    tabId !== 1 && 'hidden'
                                )}
                            >
                                <FormSettings />
                            </div>
                            {templateForms !== undefined && (
                                <div
                                    className={cn(
                                        'visible',
                                        tabId !== 3 && 'hidden'
                                    )}
                                >
                                    {templateForms?.length > 0 ? (
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
