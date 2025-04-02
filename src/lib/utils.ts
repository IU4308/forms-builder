import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTableHead = (attributes: string[][]) => {
    return attributes.map((item) => {
        return {
            content: item[0],
            className: item[1],
        };
    });
};

export const getTableBody = (
    attributes: string[][],
    data: { [key: string]: any }[]
) => {
    let body: { content: any; className: string }[][] = [];
    data.forEach((element) => {
        body.push(
            attributes.map((item) => {
                return {
                    content: element[item[0]],
                    className: item[1],
                };
            })
        );
    });
    return body;
};

type Row = {
    content: string | Element;
    className: string;
}[];

export const prependElement = (row: Row, element: Element, className = '') => {
    row.unshift({
        content: element,
        className: className,
    });

    return row;
};

export const format = (string: string) => {
    return (string[0].toUpperCase() + string.slice(1)).replace('_at', '');
};
