import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import * as changeCase from 'change-case';
import { navMenu } from './constants';
import { CurrentUser, TableAttributes } from './definitions';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTableBody = (
    attributes: TableAttributes[],
    data: { [key: string]: any }[]
) => {
    let body: {
        content: any;
        label: string;
        className: string;
        shouldRender: boolean;
    }[][] = [];
    data.forEach((element) => {
        body.push(
            attributes.map((item) => {
                return {
                    content: element[item.label],
                    label: item.label,
                    className: item.className,
                    shouldRender: item.shouldRender ?? true,
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
    return changeCase.sentenceCase(head);
};

export const formatContent = (content: any) => {
    if (content === null) return 'NULL';
    if (typeof content === 'boolean') return content ? 'TRUE' : 'FALSE';
    if (
        typeof content === 'string' &&
        content.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
    ) {
        return format(new Date(content), 'MMM dd, yyyy HH:mm:ss');
    }
    return content;
};

export const getMenu = (currentUser: CurrentUser) => {
    return navMenu.filter((item) => {
        if (!currentUser)
            return item.title !== 'Logout' && item.title !== 'Admin';
        return currentUser.isAdmin
            ? item.title !== 'Login'
            : item.title !== 'Admin' && item.title !== 'Login';
    });
};
