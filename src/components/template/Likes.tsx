import { Button } from '../ui/button';
import { Form, useLoaderData, useLocation, useParams } from 'react-router';
import { FormData, TemplateData } from '@/lib/definitions';
import { BiLike, BiSolidLike } from 'react-icons/bi';

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
            className=" my-4 flex items-center gap-2"
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
            <div className="flex items-center gap-2">
                {currentUser && (
                    <Button type="submit" variant="ghost">
                        {isLiked ? <BiSolidLike /> : <BiLike />}
                    </Button>
                )}
                <span className="text-2xl">{template.likes.length}</span>
            </div>
        </Form>
    );
}
