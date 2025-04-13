import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useLoaderData } from 'react-router';
import { TemplateType, Topic } from '@/lib/definitions';

type LoaderData = {
    template: TemplateType;
    topics: Topic[];
};

export default function FormSettings() {
    const { template, topics } = useLoaderData<LoaderData>();
    console.log(topics);
    return (
        <div className="flex flex-col gap-4  py-6 px-4 md:px-16">
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
                <Input
                    id="description"
                    defaultValue={template?.description ?? 'No description'}
                    name="description"
                    className="!bg-background"
                />
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
                <Input
                    type="file"
                    id="image"
                    className="!bg-background"
                    name="image"
                    accept="image/*"
                />
                {template?.imageUrl && (
                    <img src={template.imageUrl} alt="template image" />
                )}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" className="!bg-background" />
            </div>
        </div>
    );
}
