import { CustomFieldProps } from '@/lib/definitions';
import { cn, getQuestionType } from '@/lib/utils';
import { IoTrash } from 'react-icons/io5';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { BiGridHorizontal } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function CustomField({
    mode,
    id,
    index,
    isPresent,
    question,
    answer,
    description,
    activeId,
    setActiveId,
    onDeleteField,
    canEdit,
}: CustomFieldProps) {
    const { t: translator } = useTranslation();
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const questionType = getQuestionType(id);

    return (
        <div
            ref={setNodeRef}
            style={style}
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
                    <div
                        className="absolute top-2 left-1/2 cursor-grab active:cursor-grabbing"
                        {...attributes}
                        {...listeners}
                    >
                        <BiGridHorizontal size={20} />
                    </div>
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
            <input hidden readOnly name={`${id}State`} value={'true'} />
            <input hidden readOnly name={`${id}Position`} value={index + 1} />
            <Input
                key={`${id}-question-${question}`}
                name={`${id}Question`}
                defaultValue={question ?? 'No title'}
                className="font-bold px-0 !bg-accent shadow-none disabled:opacity-90 focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                disabled={mode === 'form'}
            />
            <Input
                key={`${id}-description-${description}`}
                name={`${id}Description`}
                defaultValue={description ?? 'No description'}
                className="px-0 !bg-accent shadow-none disabled:opacity-90 focus-visible:ring-0 rounded-none border-0 focus-visible:border-b"
                disabled={mode === 'form'}
            />
            {questionType !== 'multipleLine' && questionType !== 'checkbox' && (
                <Input
                    name={`${id}Answer`}
                    type={questionType === 'integerValue' ? 'number' : 'text'}
                    step={0.01}
                    className="px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b"
                    placeholder={translator(questionType)}
                    defaultValue={answer ?? ''}
                    disabled={mode === 'template' || !canEdit}
                />
            )}
            {questionType === 'multipleLine' && (
                <Textarea
                    name={`${id}Answer`}
                    className="!bg-accent"
                    placeholder={translator(questionType)}
                    defaultValue={answer ?? ''}
                    disabled={mode === 'template' || !canEdit}
                />
            )}
            {questionType === 'checkbox' && (
                <>
                    <input type="hidden" name={`${id}Answer`} value="0" />
                    <Checkbox
                        name={`${id}Answer`}
                        disabled={mode === 'template' || !canEdit}
                        value={'1'}
                        defaultChecked={`${answer}` === 'true'}
                    />
                </>
            )}
        </div>
    );
}
