import { ToolbarButton } from '@/lib/definitions';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './ui/button';
import { setSentenceCase } from '@/lib/utils';
import { Link } from 'react-router';

const ToolbarBtn = ({
    button,
    isDisabled,
}: {
    button: ToolbarButton;
    isDisabled: boolean;
}) => {
    return (
        <Button
            type={button.type ?? 'submit'}
            name="action"
            className="cursor-pointer"
            value={button.label}
            variant={button.variant ?? 'outline'}
            disabled={isDisabled && (button.canBeDisabled ?? true)}
        >
            <span>{button?.icon}</span>
            <span className="hidden md:inline">
                {setSentenceCase(button.label)}
            </span>
        </Button>
    );
};

export default function Toolbar({
    isDisabled,
    buttons,
}: {
    isDisabled: boolean;
    buttons?: ToolbarButton[];
}) {
    console.log(buttons);
    return (
        <div className="sticky top-[53px] bg-background z-20 flex gap-2 py-2">
            {buttons!.map((button) => (
                <TooltipProvider key={button.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {button.url ? (
                                <Link to={button.url}>
                                    <ToolbarBtn
                                        button={button}
                                        isDisabled={isDisabled}
                                    />
                                </Link>
                            ) : (
                                <span>
                                    <ToolbarBtn
                                        button={button}
                                        isDisabled={isDisabled}
                                    />
                                </span>
                            )}
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
