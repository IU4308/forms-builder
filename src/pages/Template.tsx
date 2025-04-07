import { Input } from '@/components/ui/input';

export default function Template() {
    return (
        <div className="flex flex-col gap-4 max-w-[768px] mx-auto">
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <h1>New Form</h1>
                <h2>Description</h2>
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <h2>Question</h2>
                <Input
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="single string answer"
                />
            </div>
        </div>
    );
}
