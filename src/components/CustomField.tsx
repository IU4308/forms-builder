import { InterfaceMode, Question } from '@/lib/definitions';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import * as changeCase from 'change-case';
import { cn, getQuestionType } from '@/lib/utils';
import { Button } from './ui/button';
import { IoTrash } from 'react-icons/io5';

type CustomFieldProps = Question & {
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
    onDeleteQuestion: (id: string) => void;
};

export default function CustomField({
    mode,
    id,
    isPresent,
    question,
    description,
    activeId,
    setActiveId,
    onDeleteQuestion,
}: CustomFieldProps) {
    const type = getQuestionType(id);
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setActiveId(id);
            }}
            className={cn(
                'relative bg-accent py-4 px-6 flex flex-col gap-4 rounded-sm',
                !isPresent && 'hidden'
            )}
        >
            {activeId === id && (
                <div>
                    <Button
                        type="button"
                        className="absolute top-2 right-2"
                        variant={'destructive'}
                        onClick={() => onDeleteQuestion(activeId)}
                        disabled={activeId === ''}
                    >
                        <IoTrash />
                    </Button>
                </div>
            )}
            <Input
                hidden
                name={`${id}State`}
                value={Number(isPresent)}
                readOnly
            />
            <Input
                name={`${id}Question`}
                defaultValue={question ?? 'No title'}
                className="px-0 !bg-accent disabled:opacity-90 focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                disabled={mode === 'form'}
            />
            <Input
                name={`${id}Description`}
                defaultValue={description ?? 'No description'}
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
    );
}
