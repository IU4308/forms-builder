import { useMatches } from 'react-router';
import {
    CommentType,
    CurrentUser,
    FormType,
    Tag,
    TemplateFormsType,
    TemplateType,
    Topic,
} from './definitions';

type User = {
    id: string;
    name: string;
    email: string;
};

type CreateTemplateData = {
    currentUser: CurrentUser;
    mode: 'template';
    topics: Topic[];
    tags: Tag[];
    users: User[];
};

type TemplateData = {
    currentUser: CurrentUser;
    topics: Topic[];
    tags: Tag[];
    users: User[];
    mode: 'template';
    templateForms: TemplateFormsType[];
    template: TemplateType;
    comments: CommentType[];
};

type FormData = {
    currentUser: CurrentUser;
    template: TemplateType;
    mode: 'form';
    canEdit: boolean;
};

type FilledFormData = {
    template: FormType;
    mode: 'form';
    canEdit: boolean;
};

type CombinedData =
    | CreateTemplateData
    | TemplateData
    | FormData
    | FilledFormData;

type DataType = CreateTemplateData | TemplateData | FormData | FilledFormData;

type Handle = {
    id?: string;
};

export const useMergedLoadersData = () => {
    const matches = useMatches() as Array<{
        data: DataType;
        handle?: Handle;
    }>;

    const createTemplateData = matches.find(
        (m) => m.handle?.id === 'createTemplate'
    )?.data as CreateTemplateData | undefined;

    const templateData = matches.find((m) => m.handle?.id === 'editTemplate')
        ?.data as TemplateData | undefined;

    const formData = matches.find((m) => m.handle?.id === 'form')?.data as
        | FormData
        | undefined;

    const filledFormData = matches.find((m) => m.handle?.id === 'filledForm')
        ?.data as FilledFormData | undefined;

    const data: CombinedData =
        filledFormData ?? formData ?? templateData ?? createTemplateData;

    // const data: CombinedData = {
    //     ...createTemplateData,
    //     ...(templateData ?? {}),
    //     ...(formData ?? {}),
    //     ...(filledFormData ?? {}),
    // };

    return data;
};
