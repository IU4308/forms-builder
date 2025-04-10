import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { QuestionType } from '@/lib/definitions';

const Type = ({
    value,
    onAddQuestion,
}: {
    value: QuestionType;
    onAddQuestion: (type: QuestionType) => void;
}) => {
    return (
        <DropdownMenuItem onClick={() => onAddQuestion(value)}>
            {value}
        </DropdownMenuItem>
    );
};

const types = ['singleLine', 'multipleLine', 'integerValue', 'checkbox'];

export default function TemplateToolbar({
    onAddQuestion,
}: {
    onAddQuestion: (type: QuestionType) => void;
}) {
    return (
        <div className="sticky top-[53px] bg-background z-20 flex gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger className="border px-4 py-1 bg-accent rounded-sm cursor-pointer">
                    Add question
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {types.map((type) => (
                        <Type
                            key={type}
                            value={type as QuestionType}
                            onAddQuestion={onAddQuestion}
                        />
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
