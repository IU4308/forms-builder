import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function FormSettings() {
    return (
        <div className="flex flex-col gap-4  py-6 px-4 md:px-16">
            <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    defaultValue={'New Form'}
                    name="title"
                    className="!bg-background"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                    id="description"
                    defaultValue={'No description'}
                    name="description"
                    className="!bg-background"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Label>Topic</Label>
                <Select>
                    <SelectTrigger className="w-[180px] !bg-background">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="!bg-background">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" className="!bg-background" />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" className="!bg-background" />
            </div>
        </div>
    );
}
