import { Form, useLoaderData, useParams } from 'react-router';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import socket from '@/lib/socket';
import { FormData, TemplateData } from '@/lib/definitions';

export default function Comments() {
    const { templateId } = useParams();
    const { currentUser, template } = useLoaderData() as
        | TemplateData
        | FormData;
    const [comments, setComments] = useState(template.comments);
    useEffect(() => {
        socket.on('newComment', (newComment) => {
            console.log('New comment received:', newComment);
            setComments((prevComments) => [...prevComments, newComment]);
        });

        return () => {
            socket.off('newComment');
        };
    }, [template]);

    return (
        <Form
            action={`/templates/${templateId}/comments`}
            method="post"
            className="max-w-[768px] mx-auto my-4 flex flex-col gap-4"
        >
            <h1>Comments</h1>
            {currentUser && (
                <>
                    <input
                        hidden
                        readOnly
                        name="authorId"
                        value={currentUser.userId}
                    />
                    <input
                        hidden
                        readOnly
                        name="templateId"
                        value={templateId}
                    />
                    <input
                        hidden
                        readOnly
                        name="name"
                        value={currentUser.name}
                    />
                    <input
                        hidden
                        readOnly
                        name="email"
                        value={currentUser.email}
                    />
                    <div className="flex gap-2">
                        <Input
                            placeholder="Enter a comment"
                            name="body"
                            defaultValue={''}
                        />
                        <Button type="submit">Publish</Button>
                    </div>
                </>
            )}
            <div>
                {comments?.map((comment) => (
                    <div
                        key={comment.id}
                        className="border-b py-4 flex flex-col gap-4"
                    >
                        <div className="flex gap-2">
                            <div>{comment.author.name}</div>
                            <div className="text-muted-foreground">
                                {format(comment.createdAt, 'dd MMM yyyy')}
                            </div>
                        </div>
                        <div className="break-words">{comment.body}</div>
                    </div>
                ))}
            </div>
        </Form>
    );
}
