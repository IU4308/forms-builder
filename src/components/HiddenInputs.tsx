import { useMergedLoadersData } from '@/lib/useMergedLoadersData';
import { useParams } from 'react-router';

export default function HiddenInputs() {
    const { templateId, formId } = useParams();
    const { currentUser, mode } = useMergedLoadersData();
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
