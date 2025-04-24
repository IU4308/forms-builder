import { TemplateLoaderData } from '@/lib/definitions';
import { useLoaderData, useParams } from 'react-router';

export default function HiddenInputs() {
    const { templateId, formId } = useParams();
    const { currentUser, mode } = useLoaderData() as TemplateLoaderData;
    return (
        <>
            {formId === undefined && (
                <input
                    hidden
                    readOnly
                    name={mode === 'template' ? 'creatorId' : 'authorId'}
                    value={currentUser.userId}
                />
            )}
            {mode === 'form' && (
                <input hidden readOnly name="templateId" value={templateId} />
            )}
        </>
    );
}
