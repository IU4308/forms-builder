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
    lastLogin: string;
    isBlocked: boolean;
    isAdmin: boolean;
}
