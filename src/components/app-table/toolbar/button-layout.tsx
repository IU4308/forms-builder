import { ToolbarButton as ToolbarButtonType } from '@/lib/definitions';
import { Link } from 'react-router';
import ToolbarButton from './button';

export default function ToolbarButtonWrapper({
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
    const toolbarButton = (
        <ToolbarButton
            button={button}
            isDisabled={isDisabled}
            shouldSubmit={shouldSubmit}
            handleMarkToRemove={handleMarkToRemove}
            selectedRows={selectedRows}
        />
    );

    return button.url ? (
        <Link to={button.url}>{toolbarButton}</Link>
    ) : (
        <span>{toolbarButton}</span>
    );
}
