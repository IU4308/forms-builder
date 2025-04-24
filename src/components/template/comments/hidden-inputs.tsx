import { FormData, TemplateData } from '@/lib/definitions';
import { useLoaderData, useLocation, useParams } from 'react-router';

export default function CommentHiddenInputs() {
    const { templateId } = useParams();
    const location = useLocation();
    const { currentUser } = useLoaderData() as TemplateData | FormData;
    return (
        <>
            <input
                hidden
                readOnly
                name="redirectTo"
                value={location.pathname}
            />
            <input hidden readOnly name="authorId" value={currentUser.userId} />
            <input hidden readOnly name="templateId" value={templateId} />
            <input hidden readOnly name="name" value={currentUser.name} />
            <input hidden readOnly name="email" value={currentUser.email} />
        </>
    );
}
