import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import * as changeCase from 'change-case';
import { navMenu } from './constants';
import { Cell, CurrentUser, TableAttributes, User } from './definitions';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const setSentenceCase = (head: string) => {
    return changeCase.sentenceCase(head);
};

export const getTableBody = (
    attributes: TableAttributes[],
    data: { [key: string]: any }[]
) => {
    let body: Cell[][] = [];
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

export const sortUsers = (
    users: User[],
    field: keyof User,
    isDescending: boolean
) => {
    const sortedUsers = users.sort((a, b) => {
        return field === 'createdAt' || field === 'lastLogin'
            ? Date.parse(a[field] as string) - Date.parse(b[field] as string)
            : formatContent(a[field]).localeCompare(formatContent(b[field]));
    });
    return isDescending ? sortedUsers : sortedUsers.reverse();
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

export const setFlash = (
    message: string,
    type: 'success' | 'error' = 'success'
) => {
    sessionStorage.setItem('flash', `${type.toUpperCase() + '|' + message}`);
    window.dispatchEvent(new Event('flashMessageChange'));
};

export const getFlash = () => {
    const [type, message] = (sessionStorage
        .getItem('flash')
        ?.split('|', 2) as string[]) ?? ['', ''];
    sessionStorage.removeItem('flash');
    return { message, type };
};
