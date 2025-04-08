import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Answer } from '@/lib/definitions';

const Type = ({
    value,
    onAddQuestion,
}: {
    value: Answer;
    onAddQuestion: (type: Answer) => void;
}) => {
    return (
        <DropdownMenuItem onClick={() => onAddQuestion(value)}>
            {value}
        </DropdownMenuItem>
    );
};

const types = ['single-line', 'multiple-line', 'integer-value', 'checkbox'];

export default function TemplateToolbar({
    onAddQuestion,
}: {
    onAddQuestion: (type: Answer) => void;
}) {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="border px-4 py-2 bg-accent rounded-sm cursor-pointer">
                    Add question
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Answer type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {types.map((type) => (
                        <Type
                            key={type}
                            value={type as Answer}
                            onAddQuestion={onAddQuestion}
                        />
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
