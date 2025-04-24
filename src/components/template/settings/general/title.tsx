import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
