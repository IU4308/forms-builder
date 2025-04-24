import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { QuestionType } from '@/lib/definitions';

const types = ['singleLine', 'multipleLine', 'integerValue', 'checkbox'];

export default function TemplateToolbar({
    onAddField,
}: {
    onAddField: (type: QuestionType) => void;
}) {
    return (
        <div className="sticky top-[157px] bg-background z-20 flex gap-2 pb-2">
            <DropdownMenu>
                <DropdownMenuTrigger className="border px-4 py-1 bg-accent rounded-sm cursor-pointer">
                    Add question
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {types.map((type) => (
                        <DropdownMenuItem
                            key={type}
                            onClick={() => onAddField(type as QuestionType)}
                        >
                            {type}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
