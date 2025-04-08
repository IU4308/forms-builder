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

export type ToolbarButtons = {
    description: string;
    label: string;
    icon: React.JSX.Element;
    variant?: ButtonVariant;
}[];

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

export type Answer =
    | 'single-line'
    | 'multiple-line'
    | 'integer-value'
    | 'checkbox';

export type Question = {
    id: number;
    isPresent: boolean;
    title: string;
    description: string;
    type: Answer;
};
