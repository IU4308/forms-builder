import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Answer } from '@/lib/definitions';
import { Button } from './ui/button';

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
        <div className="sticky top-[53px] bg-background z-20 flex justify-between">
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
                            value={type as Answer}
                            onAddQuestion={onAddQuestion}
                        />
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <Button type="submit" variant={'outline'}>
                Publish
            </Button>
        </div>
    );
}
