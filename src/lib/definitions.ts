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
    label: string;
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

// export type TableAttributes = typeof adminTableAttributes;

// export type AdminTableLabel = (typeof adminTableAttributes)[number]['label'];
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
    label: string;
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
    question: string | null;
    description: string | null;
    answer?: string | null;
};

export type InterfaceMode = 'template' | 'form';

export type TemplateType = {
    id: string;
    creatorId: string;

    title: string;
    description: string;
    imageUrl: string | null;
    topicId: number;
    createdAt: Date;

    // Single Line Fields
    singleLine1State: boolean;
    singleLine1Question: string | null;
    singleLine1Description: string | null;

    singleLine2State: boolean;
    singleLine2Question: string | null;
    singleLine2Description: string | null;

    singleLine3State: boolean;
    singleLine3Question: string | null;
    singleLine3Description: string | null;

    singleLine4State: boolean;
    singleLine4Question: string | null;
    singleLine4Description: string | null;

    // Multiple Line Fields
    multipleLine1State: boolean;
    multipleLine1Question: string | null;
    multipleLine1Description: string | null;

    multipleLine2State: boolean;
    multipleLine2Question: string | null;
    multipleLine2Description: string | null;

    multipleLine3State: boolean;
    multipleLine3Question: string | null;
    multipleLine3Description: string | null;

    multipleLine4State: boolean;
    multipleLine4Question: string | null;
    multipleLine4Description: string | null;

    // Integer Value Fields
    integerValue1State: boolean;
    integerValue1Question: string | null;
    integerValue1Description: string | null;

    integerValue2State: boolean;
    integerValue2Question: string | null;
    integerValue2Description: string | null;

    integerValue3State: boolean;
    integerValue3Question: string | null;
    integerValue3Description: string | null;

    integerValue4State: boolean;
    integerValue4Question: string | null;
    integerValue4Description: string | null;

    // Checkbox Fields
    checkbox1State: boolean;
    checkbox1Question: string | null;
    checkbox1Description: string | null;

    checkbox2State: boolean;
    checkbox2Question: string | null;
    checkbox2Description: string | null;

    checkbox3State: boolean;
    checkbox3Question: string | null;
    checkbox3Description: string | null;

    checkbox4State: boolean;
    checkbox4Question: string | null;
    checkbox4Description: string | null;
};
export type FormType = {
    id: string;
    creatorId: string;
    templateId: string;
    createdAt: Date;

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
