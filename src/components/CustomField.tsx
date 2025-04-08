import { Question } from '@/lib/definitions';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { prefixName } from '@/lib/utils';
import * as changeCase from 'change-case';

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
                <Input
                    hidden
                    name={prefixName('state', type, id)}
                    value={Number(isPresent)}
                    readOnly
                />
                <Input
                    name={prefixName('question', type, id)}
                    defaultValue={title}
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                />
                <Input
                    name={prefixName('description', type, id)}
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
                        placeholder={`${changeCase.sentenceCase(type)} answer`}
                        disabled
                    />
                )}
            </div>
        )
    );
}
