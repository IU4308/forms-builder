import { useMatches } from 'react-router';
import {
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
    mode: 'template' | 'form';
    topics: Topic[];
    tags: Tag[];
    users: User[];
};

type EditTemplateData = {
    templateForms?: TemplateFormsType[];
    template?: TemplateType;
};

type SubmitFormData = {
    template?: TemplateType;
    mode: 'template' | 'form';
    canEdit?: boolean;
};

type EditFormData = TemplateType & FormType & User;

type CombinedData = CreateTemplateData &
    EditTemplateData &
    EditTemplateData &
    SubmitFormData;

type DataType =
    | CreateTemplateData
    | EditTemplateData
    | EditTemplateData
    | SubmitFormData;

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
    )?.data as CreateTemplateData;

    const editTemplateData = matches.find(
        (m) => m.handle?.id === 'editTemplate'
    )?.data as EditTemplateData | undefined;

    const formData = matches.find((m) => m.handle?.id === 'form')?.data as
        | SubmitFormData
        | undefined;

    const filledFormData = matches.find((m) => m.handle?.id === 'filledForm')
        ?.data as EditFormData | undefined;

    const data: CombinedData = {
        ...createTemplateData,
        ...(editTemplateData ?? {}),
        ...(formData ?? {}),
        ...(filledFormData ?? {}),
    };

    return data;
};
