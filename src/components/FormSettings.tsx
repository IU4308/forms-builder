import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';

export default function FormSettings() {
    return (
        <div className="flex flex-col bg-accent">
            <div className=" py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" className="!bg-accent" />
            </div>
            <div className=" py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" className="!bg-accent" />
            </div>
            <div></div>
        </div>
    );
}
