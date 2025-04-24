import { AiFillLike } from 'react-icons/ai';
import { Button } from '../ui/button';
import { Form, useLoaderData, useLocation, useParams } from 'react-router';
import { FormData, TemplateData } from '@/lib/definitions';

export default function Likes() {
    const { templateId } = useParams();
    const location = useLocation();
    const { currentUser, template } = useLoaderData() as
        | TemplateData
        | FormData;

    const isLiked = template.likes.includes(currentUser.userId);
    return (
        <Form
            action={`/templates/${templateId}/likes`}
            method="post"
            className="max-w-[768px] mx-auto my-4 flex items-center gap-4"
        >
            <input
                hidden
                readOnly
                name="redirectTo"
                value={location.pathname}
            />
            <input
                hidden
                readOnly
                name="action"
                value={isLiked ? 'remove' : 'add'}
            />
            <input hidden readOnly name="userId" value={currentUser.userId} />
            <input hidden readOnly name="templateId" value={templateId} />
            <div>{template.likes.length} Likes</div>
            <Button type="submit" variant={isLiked ? 'default' : 'ghost'}>
                <AiFillLike />
            </Button>
        </Form>
    );
}
