import { Label } from '@radix-ui/react-label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Topic } from '@/lib/definitions';

export default function TemplateTopic({
    topics,
    topicId,
}: {
    topics: Topic[];
    topicId: number | undefined;
}) {
    return (
        <div className="flex flex-col gap-4">
            <Label>Topic</Label>
            <Select name="topicId" defaultValue={`${topicId ?? topics[0].id}`}>
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
    );
}
