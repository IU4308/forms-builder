import { ToolbarButton as ToolbarButtonType } from '@/lib/definitions';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { JSX } from 'react';
import ToolbarButtonWrapper from './button-layout';

export default function Toolbar({
    isDisabled,
    buttons,
    shouldSubmit,
    handleMarkToRemove,
    selectedRows,
    slot,
}: {
    isDisabled: boolean;
    buttons?: ToolbarButtonType[];
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
                            <ToolbarButtonWrapper
                                button={button}
                                isDisabled={isDisabled}
                                shouldSubmit={shouldSubmit}
                                handleMarkToRemove={handleMarkToRemove}
                                selectedRows={selectedRows}
                            />
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
