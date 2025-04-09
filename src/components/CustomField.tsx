import { InterfaceMode, Question } from '@/lib/definitions';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
// import { prefixName } from '@/lib/utils';
import * as changeCase from 'change-case';
import { getQuestionType } from '@/lib/utils';

type CustomFieldProps = Question & {
    mode: InterfaceMode;
};

export default function CustomField({
    mode,
    id,
    isPresent,
    question,
    description,
    // type,
}: CustomFieldProps) {
    const type = getQuestionType(id);
    return (
        isPresent && (
            <div className="bg-accent py-4 px-6 flex flex-col gap-4 rounded-sm">
                <Input
                    hidden
                    name={`${id}State`}
                    value={Number(isPresent)}
                    readOnly
                />
                <Input
                    name={`${id}Question`}
                    defaultValue={question}
                    className="px-0 !bg-accent disabled:opacity-90 focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                    disabled={mode === 'form'}
                />
                <Input
                    name={`${id}Description`}
                    defaultValue={description}
                    className="px-0 !bg-accent disabled:opacity-90 focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                    disabled={mode === 'form'}
                />
                {type === 'checkbox' ? (
                    <Checkbox id="int-1" disabled />
                ) : (
                    <Input
                        type={type === 'integerValue' ? 'number' : 'text'}
                        id="sl-1"
                        className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b"
                        placeholder={`${changeCase.sentenceCase(type)} answer`}
                        disabled={mode === 'template'}
                    />
                )}
            </div>
        )
    );
}
