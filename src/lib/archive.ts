import { Cell, TableAttributes, TemplateFormsType } from './definitions';
import { formatContent, setSentenceCase } from './utils';

// @ts-ignore
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

export const getAnswersAttributes = (form: TemplateFormsType) => {
    let attributes = [];
    for (const key of Object.keys(form)) {
        if (
            !key.includes('Answer') &&
            !key.includes('State') &&
            !key.includes('Question')
        ) {
            attributes.push({
                label: setSentenceCase(key),
                key: key,
                shouldRender: key !== 'id',
            });
        }
        if (key.includes('Answer')) {
            const questionKey = key.replace(
                'Answer',
                'Question'
            ) as keyof TemplateFormsType;
            const stateKey = key.replace(
                'Answer',
                'State'
            ) as keyof TemplateFormsType;
            attributes.push({
                label: form[questionKey] as string,
                key: key,
                shouldRender: !!form[stateKey],
            });
        }
    }
    return attributes;
};
