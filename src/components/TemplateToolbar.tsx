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
    onAddField,
}: {
    value: QuestionType;
    onAddField: (type: QuestionType) => void;
}) => {
    return (
        <DropdownMenuItem onClick={() => onAddField(value)}>
            {value}
        </DropdownMenuItem>
    );
};

const types = ['singleLine', 'multipleLine', 'integerValue', 'checkbox'];

export default function TemplateToolbar({
    onAddField,
}: {
    onAddField: (type: QuestionType) => void;
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
                            onAddField={onAddField}
                        />
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
