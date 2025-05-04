import Comments from '@/components/template/comments/Comments';
import CustomForm from '@/components/template/tabs/questions/CustomForm';
import FormResponse from '@/components/template/FormResponse';
import HiddenInputs from '@/components/template/HiddenInputs';
import TemplateHeader from '@/components/template/TemplateHeader';
import { TemplateLoaderData } from '@/lib/definitions';
import { cn, getTemplateActionUrl } from '@/lib/utils';
import { useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router';
import TemplateSettings from '@/components/template/settings/TemplateSettings';
import Likes from '@/components/template/likes/Likes';
import TemplateForms from '@/components/template/tabs/forms/TemplateForms';
import TemplateResults from '@/components/template/tabs/results/results';

export default function Template() {
    const { mode, currentUser } = useLoaderData() as TemplateLoaderData;
    const { templateId, formId } = useParams();
    const [tabId, setTabId] = useState(2);
    const [activeId, setActiveId] = useState('');

    const fetcher = useFetcher();
    const isIdle = fetcher.state === 'idle';
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
                        {currentUser && <HiddenInputs />}
                        {mode === 'template' && (
                            <>
                                <TemplateHeader
                                    tabId={tabId}
                                    setTabId={setTabId}
                                    isIdle={isIdle}
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
            {!fetcher?.data?.formResponse && !formId && templateId && (
                <div
                    className={cn(
                        'relative my-16 max-w-[768px] mx-auto hidden',
                        tabId === 2 && 'block'
                    )}
                >
                    <Likes />
                    <Comments />
                </div>
            )}
        </div>
    );
}
