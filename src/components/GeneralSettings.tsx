import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { TemplateType, Topic } from '@/lib/definitions';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { Button } from './ui/button';
import { IoTrash } from 'react-icons/io5';

export default function GeneralSettings({
    template,
    topics,
}: {
    template: TemplateType | undefined;
    topics: Topic[];
}) {
    const [description, setDescription] = useState(
        template?.description ?? 'No description'
    );
    const [isTrashed, setIsTrashed] = useState(false);
    return (
        <div className="flex flex-col gap-4 py-4">
            <h1>General settings</h1>
            <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    defaultValue={template?.title ?? 'New Form'}
                    name="title"
                    className="!bg-background"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <div className="container">
                    <MDEditor
                        id="description"
                        value={description}
                        onChange={(value) => setDescription(value ?? '')}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                    />
                </div>
                <input type="hidden" name="description" value={description} />
            </div>
            <div className="flex flex-col gap-4">
                <Label>Topic</Label>
                <Select
                    name="topicId"
                    defaultValue={`${template?.topicId ?? topics[0].id}`}
                >
                    <SelectTrigger className="w-[180px] !bg-background">
                        <SelectValue placeholder="Select topic" />
                    </SelectTrigger>
                    <SelectContent className="!bg-background" side="right">
                        {topics.map((topic) => (
                            <SelectItem key={topic.id} value={`${topic.id}`}>
                                {topic.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="image">Image</Label>
                {isTrashed && (
                    <input hidden readOnly name="imageUrl" value={''} />
                )}
                {(!template?.imageUrl || isTrashed) && (
                    <Input
                        type="file"
                        id="image"
                        className="!bg-background"
                        name="image"
                        accept="image/*"
                    />
                )}
                {template?.imageUrl && !isTrashed && (
                    <div className="relative">
                        <img src={template.imageUrl} alt="template image" />
                        <Button
                            type="button"
                            className="absolute top-2 right-2"
                            variant={'destructive'}
                            onClick={() => setIsTrashed(true)}
                        >
                            <IoTrash />
                        </Button>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" className="!bg-background" />
            </div>
        </div>
    );
}
