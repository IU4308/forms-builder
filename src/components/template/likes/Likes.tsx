import { Button } from '../../ui/button';
import {
    Form,
    useLoaderData,
    useLocation,
    useNavigation,
    useParams,
} from 'react-router';
import { FormData, TemplateData } from '@/lib/definitions';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import LikesHiddenInputs from './hidden-inputs';

export default function Likes() {
    const { templateId } = useParams();
    const location = useLocation();
    const { currentUser, template } = useLoaderData() as
        | TemplateData
        | FormData;

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const isLiked = template.likedIds.includes(currentUser?.userId);
    return (
        <Form
            action={`/templates/${templateId}/likes`}
            method="post"
            className=" my-4 flex items-center gap-2"
        >
            {currentUser && (
                <LikesHiddenInputs
                    action={isLiked ? 'remove' : 'add'}
                    userId={currentUser.userId}
                    templateId={templateId!}
                    path={location.pathname}
                />
            )}
            <div className="flex items-center gap-2">
                <Button
                    type="submit"
                    variant="ghost"
                    disabled={!currentUser || isSubmitting}
                >
                    {isLiked ? <BiSolidLike /> : <BiLike />}
                </Button>
                <span className="text-2xl">{template.likedIds.length}</span>
            </div>
        </Form>
    );
}
