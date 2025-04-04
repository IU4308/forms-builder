import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import * as changeCase from 'change-case';

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

export const formatHead = (head: string) => {
    return changeCase.capitalCase(head);
};

export const formatContent = (content: any) => {
    if (content === null) return 'NULL';
    if (typeof content === 'boolean') return content ? 'TRUE' : 'FALSE';
    if (content.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
        return format(new Date(content), 'MMM dd, yyyy HH:mm:ss');
    }
    return content;
};
