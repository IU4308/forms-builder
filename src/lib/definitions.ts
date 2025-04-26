import { JSX, ReactNode } from 'react';
import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

export type RegisterData = z.infer<typeof registerSchema>;
export type LoginData = z.infer<typeof loginSchema>;

export interface TableProps {
    url?: string | string[];
    data: { [key: string]: any }[];
    attributes: TableAttributes;
    buttons?: ToolbarButton[];
    toolbarSlot?: JSX.Element;
    slot?: ReactNode;
    renderCheckbox?: boolean;
    shouldSort?: boolean;
    shouldSubmit?: boolean;
    handleMarkToRemove?: (ids: string[]) => void;
}

export interface HeaderProps {
    attributes: TableAttributes;
    body: Cell[][];
    renderCheckbox?: boolean;
    allSelected?: boolean;
    onClick?: () => void;
    sorter?: string;
    handleChangeSorter?: (label: string) => void;
    isDescending?: boolean;
    shouldSubmit?: boolean;
}

export interface BodyProps {
    url?: string | string[];
    body: Cell[][];
    renderCheckbox?: boolean;
    selectedRows?: string[];
    handleSelect?: (id: string) => void;
    shouldSubmit?: boolean;
}

export type CustomFieldProps = Field & {
    index: number;
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
    onDeleteField: (id: string) => void;
    canEdit: boolean | undefined;
};

export interface CurrentUser {
    userId: string;
    name: string;
    email: string;
    isBlocked: boolean;
    isAdmin: boolean;
}

export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    lastLogin: string | null;
    isBlocked: boolean;
    isAdmin: boolean;
}

export type TableAttributes = {
    label?: string;
    key: string;
    className?: string;
    shouldRender?: boolean;
}[];

export type ToolbarButton = {
    type?: 'button' | 'submit' | 'reset';
    description: string;
    label: string;
    icon?: React.JSX.Element;
    variant?: ButtonVariant;
    canBeDisabled?: boolean;
    url?: string;
};

export type AdminTableLabel =
    | 'id'
    | 'name'
    | 'email'
    | 'createdAt'
    | 'lastLogin'
    | 'isBlocked'
    | 'isAdmin';

export type ButtonVariant =
    | 'destructive'
    | 'default'
    | 'link'
    | 'outline'
    | 'secondary'
    | 'ghost';

export interface Cell {
    content: string | boolean | null;
    label: string | undefined;
    className: string;
    shouldRender: boolean;
}

export type Flash = {
    message: string;
    type: 'SUCCESS' | 'ERROR';
} | null;

export type QuestionType =
    | 'singleLine'
    | 'multipleLine'
    | 'integerValue'
    | 'checkbox';

export type Field = {
    id: string;
    isPresent: boolean;
    position: number;
    question: string | null;
    description: string | null;
    answer?: string | null;
};

export type InterfaceMode = 'template' | 'form';

export type TemplateType = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    fields: Field[];
    creatorId: string;
    isPublic: boolean;
    allowedIds: string[];
    tagIds: number[];
    comments: CommentType[];
    likes: string[];
    topicId: number;
    credentials: undefined;
};

export type FormType = {
    id: string;
    authorId: string;
    credentials: {
        name: string;
        email: string;
    };
    creatorId: string;
    title: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    fields: Field[];
    topicId: undefined;
    isPublic: undefined;
    allowedIds: undefined;
};

export type CreateTemplateData = {
    currentUser: CurrentUser;
    mode: 'template';
    topics: Topic[];
    tags: Tag[];
    users: User[];
    templateForms: undefined;
    comments: undefined;
    template: undefined;
    canEdit: undefined;
};

export type TemplateData = {
    currentUser: CurrentUser;
    topics: Topic[];
    tags: Tag[];
    users: User[];
    mode: 'template';
    templateForms: TemplateFormsType[];
    results: AggregatedResult[];
    template: TemplateType;
    comments: CommentType[];
    canEdit: undefined;
};

export type FormData = {
    currentUser: CurrentUser;
    template: TemplateType;
    mode: 'form';
    canEdit: boolean;
    topics: undefined;
    tags: undefined;
    users: undefined;
    templateForms: undefined;
    comments: undefined;
};

export type FilledFormData = {
    currentUser: CurrentUser;
    template: FormType;
    mode: 'form';
    canEdit: boolean;
    topics: undefined;
    tags: undefined;
    users: undefined;
    templateForms: undefined;
    comments: undefined;
};

export type TemplateLoaderData =
    | CreateTemplateData
    | TemplateData
    | FormData
    | FilledFormData;

export type TemplateFormsType = {
    id: string;
    name: string;
    email: string;
    submittedAt: string;
    singleLine1State: boolean;
    singleLine2State: boolean;
    singleLine3State: boolean;
    singleLine4State: boolean;
    multipleLine1State: boolean;
    multipleLine2State: boolean;
    multipleLine3State: boolean;
    multipleLine4State: boolean;
    integerValue1State: boolean;
    integerValue2State: boolean;
    integerValue3State: boolean;
    integerValue4State: boolean;
    checkbox1State: boolean;
    checkbox2State: boolean;
    checkbox3State: boolean;
    checkbox4State: boolean;
    singleLine1Answer: string | null;
    singleLine2Answer: string | null;
    singleLine3Answer: string | null;
    singleLine4Answer: string | null;
    multipleLine1Answer: string | null;
    multipleLine2Answer: string | null;
    multipleLine3Answer: string | null;
    multipleLine4Answer: string | null;
    integerValue1Answer: string | null;
    integerValue2Answer: string | null;
    integerValue3Answer: string | null;
    integerValue4Answer: string | null;
    checkbox1Answer: string | null;
    checkbox2Answer: string | null;
    checkbox3Answer: string | null;
    checkbox4Answer: string | null;
};

export type Topic = {
    id: string;
    name: string;
};

export type Tag = {
    id: number;
    name: string;
};

export type latestTemplateType = {
    id: string;
    author: string;
    title: string;
    description: string;
    imageUrl: string;
    createdAt: string;
};

export type popularTemplateType = {
    id: string;
    author: string;
    title: string;
    topic: string;
    createdAt: string;
    submissions: number;
};

export type CommentType = {
    id: number;
    authorId: string;
    templateId: string;
    body: string;
    author: {
        name: string;
        email: string;
    };
    createdAt: Date;
};

export type AggregatedResult = {
    question: string;
    type: 'single_line' | 'multiple_line' | 'integer_value' | 'checkbox';
    answers: [string, number][];
};
