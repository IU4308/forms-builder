import { Button } from '@/components/ui/button';
import { ToolbarButton as ToolbarButtonType } from '@/lib/definitions';
import { setSentenceCase } from '@/lib/utils';
import * as changeCase from 'change-case';

export default function ToolbarButton({
    button,
    isDisabled,
    shouldSubmit,
    handleMarkToRemove,
    selectedRows,
}: {
    button: ToolbarButtonType;
    isDisabled: boolean;
    shouldSubmit: boolean;
    handleMarkToRemove?: (ids: string[]) => void;
    selectedRows: string[];
}) {
    return (
        <Button
            type={button.type ?? 'submit'}
            name="action"
            className="cursor-pointer"
            value={changeCase.kebabCase(button.label)}
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
}
