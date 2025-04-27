import Comments from '@/components/template/comments/Comments';
import CustomForm from '@/components/template/CustomForm';
import FormResponse from '@/components/template/FormResponse';
import HiddenInputs from '@/components/template/HiddenInputs';
import TemplateHeader from '@/components/template/TemplateHeader';
import { TemplateLoaderData } from '@/lib/definitions';
import { getTemplateActionUrl } from '@/lib/utils';
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router';
import TemplateSettings from '@/components/template/settings/TemplateSettings';
import Likes from '@/components/template/Likes';
import TemplateForms from '@/components/template/tabs/forms/TemplateForms';
import TemplateResults from '@/components/template/tabs/results/results';

export default function Template() {
    const { mode } = useLoaderData() as TemplateLoaderData;
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
                                <TemplateSettings tabId={tabId} />
                                {tabId === 3 && <TemplateForms />}

                                {tabId === 4 && <TemplateResults />}
                            </>
                        )}

                        <CustomForm
                            tabId={tabId}
                            mode={mode}
                            activeId={activeId}
                            setActiveId={setActiveId}
                        />
                    </div>
                )}
            </fetcher.Form>
            {!fetcher?.data?.formResponse &&
                !formId &&
                templateId &&
                tabId === 2 && (
                    <div className="relative my-16 max-w-[768px] mx-auto">
                        <Likes />
                        <Comments />
                    </div>
                )}
        </div>
    );
}
