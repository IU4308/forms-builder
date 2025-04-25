import Comments from '@/components/template/comments/Comments';
import CustomForm from '@/components/template/CustomForm';
import FormResponse from '@/components/template/FormResponse';
import HiddenInputs from '@/components/template/HiddenInputs';
import Table from '@/components/Table';
import TemplateHeader from '@/components/template/TemplateHeader';
import { TemplateLoaderData } from '@/lib/definitions';
import { cn, getAnswersAttributes, getTemplateActionUrl } from '@/lib/utils';
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router';
import TemplateSettings from '@/components/template/settings/TemplateSettings';
import Likes from '@/components/template/Likes';

export default function Template() {
    const { mode, templateForms } = useLoaderData() as TemplateLoaderData;
    const { templateId, formId } = useParams();
    const [tabId, setTabId] = useState(2);
    const [activeId, setActiveId] = useState('');

    const fetcher = useFetcher();
    return (
        <div>
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
                                <TemplateHeader
                                    tabId={tabId}
                                    setTabId={setTabId}
                                />
                                <div
                                    className={cn(
                                        'visible',
                                        tabId !== 1 && 'hidden'
                                    )}
                                >
                                    <TemplateSettings />
                                </div>
                                {templateForms && (
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
            {!formId && templateId && tabId === 2 && (
                <div className="relative my-16 max-w-[768px] mx-auto">
                    <Likes />
                    <Comments />
                </div>
            )}
        </div>
    );
}
