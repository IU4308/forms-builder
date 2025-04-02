import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTableHead = (rowProps: string[][]) => {
    return rowProps.map((item) => {
        return {
            content: item[0],
            className: item[1],
        };
    });
};

export const getTableBody = (
    rowProps: string[][],
    data: { [key: string]: any }[]
) => {
    let body: { content: any; className: string }[][] = [];
    data.forEach((element) => {
        body.push(
            rowProps.map((item) => {
                return {
                    content: element[item[0]],
                    className: item[1],
                };
            })
        );
    });
    return body;
};
