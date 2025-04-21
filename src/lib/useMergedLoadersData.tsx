import { useMatches } from 'react-router';

type CreateTemplateData = {
    currentUser: any;
    mode: string;
    topics: any[];
    tags: any[];
    users: any[];
};

type EditTemplateData = {
    templateForms?: any[];
    template?: any;
};

type FormData = {
    template?: any;
    mode: string;
    canEdit: boolean;
};

type CombinedData = CreateTemplateData &
    EditTemplateData &
    EditTemplateData &
    FormData;

type Handle = {
    id?: string;
};

export const useMergedLoadersData = () => {
    const matches = useMatches() as Array<{
        data: unknown;
        handle?: Handle;
    }>;

    const createTemplateData = matches.find(
        (m) => m.handle?.id === 'createTemplate'
    )?.data as CreateTemplateData | undefined;

    const editTemplateData = matches.find(
        (m) => m.handle?.id === 'editTemplate'
    )?.data as EditTemplateData | undefined;

    const formData = matches.find((m) => m.handle?.id === 'form')?.data as
        | FormData
        | undefined;

    const filledFormData = matches.find((m) => m.handle?.id === 'filledForm')
        ?.data as FormData | undefined;

    const data: CombinedData = {
        ...(createTemplateData ?? {}),
        ...(editTemplateData ?? {}),
        ...(formData ?? {}),
        ...(filledFormData ?? {}),
    };

    return data;
};
