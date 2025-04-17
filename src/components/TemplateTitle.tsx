import { Label } from './ui/label';
import { Input } from './ui/input';

export default function TemplateTitle({
    title,
}: {
    title: string | undefined;
}) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
                id="title"
                defaultValue={title ?? 'New Form'}
                name="title"
                className="!bg-background"
            />
        </div>
    );
}
