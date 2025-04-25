import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import * as changeCase from 'change-case';
import { navMenu } from './constants.tsx';
import { Cell, CurrentUser, TableAttributes } from './definitions';
import { LoaderFunctionArgs } from 'react-router';
import _ from 'lodash';

export const getLoader = <T>(
    load: (args: LoaderFunctionArgs) => Promise<T>
) => {
    return async (args: LoaderFunctionArgs) => {
        try {
            return await load(args);
        } catch (error: any) {
            console.log(error);
            if (error instanceof Response) throw error;
            throw new Error('Server error');
        }
    };
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const setSentenceCase = (head: string) => {
    return changeCase.sentenceCase(head);
};

export const getTableBody = (
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

export const formatContent = (content: any, maxLength = 25) => {
    if (content === null) return 'NULL';
    if (typeof content === 'boolean') return content ? 'TRUE' : 'FALSE';
    if (
        typeof content === 'string' &&
        content.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
    ) {
        return format(new Date(content), 'MMM dd, yyyy HH:mm:ss');
    }
    return content.length > maxLength
        ? content.slice(0, maxLength - 1) + '...'
        : content;
};

export const sortData = (
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

export const getMenu = (currentUser: CurrentUser) => {
    return navMenu.filter((item) => {
        if (!currentUser)
            return !['Logout', 'Admin', 'My Workspace'].includes(item.title);
        return currentUser.isAdmin
            ? item.title !== 'Login'
            : !['Login', 'Admin'].includes(item.title);
    });
};

export const setFlash = (message: string) => {
    sessionStorage.setItem('flash', message);
    window.dispatchEvent(new Event('flashMessageChange'));
};

export const getFlash = () => {
    const message = sessionStorage.getItem('flash') ?? '';
    sessionStorage.removeItem('flash');
    return { message };
};

export const getQuestionType = (id: string) => {
    return id.slice(0, id.length - 1);
};

export const getAnswersAttributes = (form: any) => {
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
            attributes.push({
                label: form[key.replace('Answer', 'Question')],
                key: key,
                shouldRender: form[key.replace('Answer', 'State')],
            });
        }
    }
    return attributes;
};

type TemplatesTags = {
    templateId: string;
    tagId: string;
}[];

export const mapTagToTemplates = (collection: TemplatesTags) => {
    const tagToTemplates = new Map();
    for (const { templateId, tagId } of collection) {
        if (!tagToTemplates.has(tagId)) {
            tagToTemplates.set(tagId, []);
        }
        tagToTemplates.get(tagId).push(templateId);
    }
    return tagToTemplates;
};

export const getTemplateActionUrl = (
    templateId?: string,
    formId?: string,
    mode?: string
): string => {
    let action = '/templates';
    if (templateId) {
        action += `/${templateId}${mode === 'form' ? '/forms' : ''}`;
    }
    if (formId) {
        action += `/${formId}`;
    }
    return action;
};

type AggregatedResults = {
    question: string;
    answer: string;
    count: string;
    type: string;
}[];

export const groupResults = (data: AggregatedResults) => {
    return _.chain(data)
        .groupBy((item) => `${item.question}|${item.type}`)
        .map((answers, compositeKey) => {
            const [question, type] = compositeKey.split('|');
            return {
                question,
                type,
                answers: answers.map(({ answer, count }) => [
                    answer || '(empty)',
                    Number(count),
                ]),
            };
        })
        .value();
};
