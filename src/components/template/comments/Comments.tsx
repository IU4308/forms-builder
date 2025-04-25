import { Form, useLoaderData, useNavigation, useParams } from 'react-router';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import socket from '@/lib/socket';
import { FormData, TemplateData } from '@/lib/definitions';
import CommentHiddenInputs from './hidden-inputs';

export default function Comments() {
    const { templateId } = useParams();
    const { currentUser, template } = useLoaderData() as
        | TemplateData
        | FormData;
    const [comments, setComments] = useState(template.comments);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    useEffect(() => {
        socket.on('newComment', (newComment) => {
            setComments((prevComments) => [...prevComments, newComment]);
        });

        return () => {
            socket.off('newComment');
        };
    }, [template]);

    useEffect(() => {
        if (!isSubmitting && inputRef.current) {
            inputRef.current.value = '';
        }
    }, [isSubmitting]);

    return (
        <Form
            action={`/templates/${templateId}/comments`}
            method="post"
            className="max-w-[768px] mx-auto my-4 flex flex-col gap-4"
        >
            <h1>Comments ({comments.length})</h1>
            {currentUser && (
                <>
                    <CommentHiddenInputs />
                    <div className="flex gap-2">
                        <Input
                            ref={inputRef}
                            placeholder="Enter a comment"
                            name="body"
                            defaultValue={''}
                            required
                        />
                        <Button type="submit">Publish</Button>
                    </div>
                </>
            )}
            <div className="px-1">
                {comments?.map((comment) => (
                    <div
                        key={comment.id}
                        className="border-b py-4 flex flex-col gap-4"
                    >
                        <div className="flex gap-2">
                            <div>{comment.author.name}</div>
                            <div className="text-muted-foreground">
                                {format(
                                    comment.createdAt,
                                    'dd MMM yyyy HH:mm:ss'
                                )}
                            </div>
                        </div>
                        <div className="break-words">{comment.body}</div>
                    </div>
                ))}
            </div>
        </Form>
    );
}
