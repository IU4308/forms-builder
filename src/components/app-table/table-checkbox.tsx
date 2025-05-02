import { TableCell } from '../ui/table';
import { Checkbox } from '../ui/checkbox';

export default function TableCheckbox({
    name,
    value,
    onSelect,
    isChecked,
}: {
    name: string;
    value: string | string[];
    onSelect: () => void;
    isChecked: boolean | undefined;
}) {
    return (
        <TableCell>
            <Checkbox
                name={name}
                value={value}
                checked={isChecked}
                onClick={onSelect}
                className="w-5 h-5"
            />
        </TableCell>
    );
}
