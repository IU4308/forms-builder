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
import { JSX } from 'react';

const ToolbarBtn = ({
    button,
    isDisabled,
    shouldSubmit,
    handleMarkToRemove,
    selectedRows,
}: {
    button: ToolbarButton;
    isDisabled: boolean;
    shouldSubmit: boolean;
    handleMarkToRemove?: (ids: string[]) => void;
    selectedRows: string[];
}) => {
    return (
        <Button
            type={button.type ?? 'submit'}
            name="action"
            className="cursor-pointer"
            value={button.label}
            variant={button.variant ?? 'outline'}
            disabled={isDisabled && (button.canBeDisabled ?? true)}
            onClick={() => {
                if (!shouldSubmit) {
                    handleMarkToRemove!(selectedRows);
                }
            }}
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
    shouldSubmit,
    handleMarkToRemove,
    selectedRows,
    slot,
}: {
    isDisabled: boolean;
    buttons?: ToolbarButton[];
    shouldSubmit: boolean;
    handleMarkToRemove?: (ids: string[]) => void;
    selectedRows: string[];
    slot?: JSX.Element;
}) {
    return (
        <div className="sticky top-[53px] bg-background z-20 flex items-center gap-2 py-2">
            {slot}
            {buttons!.map((button) => (
                <TooltipProvider key={button.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {button.url ? (
                                <Link to={button.url}>
                                    <ToolbarBtn
                                        button={button}
                                        isDisabled={isDisabled}
                                        shouldSubmit={shouldSubmit}
                                        handleMarkToRemove={handleMarkToRemove}
                                        selectedRows={selectedRows}
                                    />
                                </Link>
                            ) : (
                                <span>
                                    <ToolbarBtn
                                        button={button}
                                        isDisabled={isDisabled}
                                        shouldSubmit={shouldSubmit}
                                        handleMarkToRemove={handleMarkToRemove}
                                        selectedRows={selectedRows}
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
