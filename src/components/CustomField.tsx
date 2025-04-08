import { Question } from '@/lib/definitions';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';

export default function CustomField({
    id,
    isPresent,
    title,
    description,
    type,
}: Question) {
    return (
        isPresent && (
            <div className="bg-accent py-4 px-6 flex flex-col gap-4 rounded-sm">
                <Input hidden name="state" value={Number(isPresent)} readOnly />
                <Input
                    name={`${id}-${title}`}
                    defaultValue={title}
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                />
                <Input
                    name={`${id}-${description}`}
                    defaultValue={description}
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                />
                {type === 'checkbox' ? (
                    <Checkbox id="int-1" disabled />
                ) : (
                    <Input
                        type="text"
                        id="sl-1"
                        className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b"
                        placeholder={`${type} answer`}
                        disabled
                    />
                )}
            </div>
        )
    );
}
