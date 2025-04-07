import { ToolbarButtons } from '@/lib/definitions';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './ui/button';
import { setSentenceCase } from '@/lib/utils';

export default function Toolbar({
    isDisabled,
    buttons,
}: {
    isDisabled: boolean;
    buttons: ToolbarButtons;
}) {
    return (
        <div className="sticky top-[53px] bg-background z-20 flex gap-2 py-2">
            {buttons.map((button) => (
                <TooltipProvider key={button.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="submit"
                                name="action"
                                className="cursor-pointer"
                                value={button.label}
                                variant={button.variant ?? 'outline'}
                                disabled={isDisabled}
                            >
                                <span className="hidden md:inline">
                                    {setSentenceCase(button.label)}
                                </span>
                                <span>{button.icon}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{button.description}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </div>
    );
}
