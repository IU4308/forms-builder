import { Input } from './ui/input';

export default function Comments() {
    return (
        <div className="max-w-[768px] mx-auto my-4 flex flex-col gap-4">
            <h1>Comments</h1>
            <Input placeholder="Enter a comment" />
            <div className="border-b py-4">
                <div className="flex gap-2">
                    <div>Jane Doe</div>
                    <div className="text-muted-foreground">20 Apr 2025</div>
                </div>
                <div className="break-words">
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </div>
            </div>
        </div>
    );
}
