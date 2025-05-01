import { TemplateLoaderData } from '@/lib/definitions';
import { useLoaderData, useParams } from 'react-router';

export default function HiddenInputs() {
    const { templateId, formId } = useParams();
    const { currentUser, mode } = useLoaderData() as TemplateLoaderData;
    return (
        <>
            {mode === 'template' && templateId === undefined && (
                <input
                    hidden
                    readOnly
                    name={'creatorId'}
                    value={currentUser.userId}
                />
            )}
            {mode === 'form' && formId === undefined && (
                <input
                    hidden
                    readOnly
                    name={'authorId'}
                    value={currentUser.userId}
                />
            )}
            {mode === 'form' && (
                <input hidden readOnly name="templateId" value={templateId} />
            )}
        </>
    );
}
