import { InterfaceMode, Field } from '@/lib/definitions';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import * as changeCase from 'change-case';
import { cn, getQuestionType } from '@/lib/utils';
import { Button } from './ui/button';
import { IoTrash } from 'react-icons/io5';

type CustomFieldProps = Field & {
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
    onDeleteField: (id: string) => void;
    canEdit: boolean;
};

export default function CustomField({
    mode,
    id,
    isPresent,
    question,
    answer,
    description,
    activeId,
    setActiveId,
    onDeleteField,
    canEdit,
}: CustomFieldProps) {
    const questionType = getQuestionType(id);
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
            {mode === 'template' && activeId === id && (
                <div>
                    <Button
                        type="button"
                        className="absolute top-2 right-2"
                        variant={'destructive'}
                        onClick={() => onDeleteField(activeId)}
                        disabled={activeId === ''}
                    >
                        <IoTrash />
                    </Button>
                </div>
            )}
            <Input
                hidden
                name={mode === 'template' ? `${id}State` : ''}
                value={Number(isPresent)}
                readOnly
            />
            <Input
                key={`${id}-question-${question}`}
                name={mode === 'template' ? `${id}Question` : ''}
                defaultValue={question ?? 'No title'}
                className="px-0 !bg-accent disabled:opacity-90 focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                disabled={mode === 'form'}
            />
            <Input
                key={`${id}-description-${description}`}
                name={mode === 'template' ? `${id}Description` : ''}
                defaultValue={description ?? 'No description'}
                className="px-0 !bg-accent disabled:opacity-90 focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                disabled={mode === 'form'}
            />
            {questionType !== 'checkbox' ? (
                <Input
                    name={`${id}Answer`}
                    type={questionType === 'integerValue' ? 'number' : 'text'}
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b"
                    placeholder={`${changeCase.sentenceCase(questionType)} answer`}
                    defaultValue={answer ?? ''}
                    disabled={mode === 'template' || !canEdit}
                />
            ) : (
                <>
                    <input type="hidden" name={`${id}Answer`} value="" />
                    <Checkbox
                        name={`${id}Answer`}
                        disabled={mode === 'template' || !canEdit}
                        value={'on'}
                        defaultChecked={answer === 'on'}
                    />
                </>
            )}
        </div>
    );
}
