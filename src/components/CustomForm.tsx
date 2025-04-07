import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CustomForm() {
    return (
        <div className="flex flex-col gap-4 ">
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <h1 className="">New Form</h1>
                <h2>Description</h2>
                {/* <img src="/test.png" className="object-contain" /> */}
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <h2>Credentials</h2>
                <div className="grid grid-cols sm:grid-cols-3 gap-6 py-2">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                            placeholder={'John Doe'}
                            disabled={true}
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                            placeholder={'john@email.com'}
                            disabled
                        />
                    </div>
                    <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                            id="date"
                            className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                            placeholder={new Date().toDateString()}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
            {/* Single-Line Questions */}
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    id="sl-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="single-line answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    id="sl-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="single-line answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    id="sl-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="single-line answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    id="sl-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="single-line answer"
                />
            </div>

            {/* Multiple-Line Questions */}
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="ml-1">Question</Label>
                <textarea
                    id="ml-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="multiple-line answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="ml-1">Question</Label>
                <textarea
                    id="ml-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="multiple-line answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="ml-1">Question</Label>
                <textarea
                    id="ml-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="multiple-line answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="ml-1">Question</Label>
                <textarea
                    id="ml-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="multiple-line answer"
                />
            </div>
            {/* Integer-value questions */}
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    type="number"
                    id="int-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="integer-value answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    type="number"
                    id="int-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="integer-value answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    type="number"
                    id="int-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="integer-value answer"
                />
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <Label htmlFor="sl-1">Question</Label>
                <Input
                    type="number"
                    id="int-1"
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                    placeholder="integer-value answer"
                />
            </div>
            {/* Checkbox question */}
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <div>Question</div>
                <div className="flex gap-6">
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            name="bool-1"
                            className="w-4"
                            id="bool-1-true"
                        />
                        <Label htmlFor="bool-1-true">True</Label>
                    </div>
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            name="bool-1"
                            className="w-4"
                            id="bool-1-false"
                        />
                        <Label htmlFor="bool-1-false">False</Label>
                    </div>
                </div>
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <div>Question</div>
                <div className="flex gap-6">
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            name="bool-2"
                            id="true"
                            className="w-4"
                        />
                        <Label htmlFor="true">True</Label>
                    </div>
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            className="w-4"
                            name="bool-2"
                            id="bool-2-false"
                        />
                        <Label htmlFor="bool-2-false">False</Label>
                    </div>
                </div>
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <div>Question</div>
                <div className="flex gap-6">
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            name="bool-3"
                            id="bool-3-true"
                            className="w-4"
                        />
                        <Label htmlFor="bool-3-true">True</Label>
                    </div>
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            className="w-4"
                            name="bool-3"
                            id="bool-3-false"
                        />
                        <Label htmlFor="bool-3-false">False</Label>
                    </div>
                </div>
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2">
                <div>Question</div>
                <div className="flex gap-6">
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            name="bool-4"
                            id="bool-4-true"
                            className="w-4"
                        />
                        <Label htmlFor="bool-4-true">True</Label>
                    </div>
                    <div className="flex gap-2">
                        <Input
                            type="radio"
                            className="w-4"
                            name="bool-4"
                            id="bool-4-false"
                        />
                        <Label htmlFor="bool-4-false">False</Label>
                    </div>
                </div>
            </div>
        </div>
    );
}
