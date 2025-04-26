import { Cell, TableAttributes } from './definitions';
import { formatContent } from './utils';

const getTableBody = (
    attributes: TableAttributes,
    data: { [key: string]: any }[],
    sorter?: string,
    isDescending?: boolean
) => {
    const tableData =
        sorter !== undefined ? sortData(data, sorter!, isDescending!) : data;
    let body: Cell[][] = [];
    tableData.forEach((element) => {
        body.push(
            attributes.map((item) => {
                return {
                    content: element[item.key],
                    label: item.label,
                    className: item.className ?? '',
                    shouldRender: item.shouldRender ?? true,
                };
            })
        );
    });
    return body;
};

const sortData = (
    data: { [key: string]: any }[],
    field: string,
    isDescending: boolean
) => {
    const sortedData = data.sort((a, b) => {
        return field === 'createdAt' || field === 'lastLogin'
            ? Date.parse(a[field] as string) - Date.parse(b[field] as string)
            : formatContent(a[field]).localeCompare(formatContent(b[field]));
    });
    return isDescending ? sortedData : sortedData.reverse();
};
