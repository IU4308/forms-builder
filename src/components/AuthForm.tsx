import { GalleryVerticalEnd } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useFetcher } from 'react-router';
import { FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    RegisterData,
    registerSchema,
    LoginData,
    loginSchema,
} from '@/lib/definitions';
import { useTranslation } from 'react-i18next';

interface AuthFormProps {
    type: 'login' | 'register';
    className?: string;
}

export function AuthForm({ type, className }: AuthFormProps) {
    const { t: translate } = useTranslation();
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === 'submitting';
    const isRegister = type === 'register';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData | LoginData>({
        resolver: zodResolver(isRegister ? registerSchema : loginSchema),
    });
    const registerErrors = errors as FieldErrors<RegisterData>;

    const onSubmit = (data: RegisterData | LoginData) => {
        fetcher.submit(data, {
            method: 'post',
            action: isRegister ? '/register' : '/login',
        });
    };

    const mode = isRegister ? 'register' : 'login';
    return (
        <div className={cn('flex flex-col gap-6', className)}>
            <fetcher.Form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <Link
                            to="/"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="flex size-8 items-center justify-center rounded-md">
                                <GalleryVerticalEnd className="size-6" />
                            </div>
                        </Link>
                        <h1 className="text-xl font-bold">
                            {translate(`auth.${mode}.title`)}
                        </h1>
                        <div className="text-center text-sm">
                            {translate(`auth.${mode}.message`)}{' '}
                            <Link
                                to={`/${isRegister ? 'login' : 'register'}`}
                                className="underline underline-offset-4"
                            >
                                {translate(`auth.${mode}.link`)}
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {isRegister && (
                            <div className="grid gap-3">
                                <Label htmlFor="name">
                                    {translate('user.name')}
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    {...register('name')}
                                    required
                                />
                                {(registerErrors.name ||
                                    fetcher.data?.error?.name) && (
                                    <p className="text-red-500">
                                        {registerErrors?.name?.message ||
                                            fetcher.data.error?.name}
                                    </p>
                                )}
                            </div>
                        )}
                        <div className="grid gap-3">
                            <Label htmlFor="email">
                                {translate('user.email')}
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                required
                            />
                            {(errors.email || fetcher.data?.error?.email) && (
                                <p className="text-red-500">
                                    {errors?.email?.message ||
                                        fetcher.data.error?.email}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="password">
                                {translate('user.password')}
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                {...register('password')}
                                required
                            />
                            {(errors.password ||
                                fetcher.data?.error?.password) && (
                                <p className="text-red-500">
                                    {errors?.password?.message ||
                                        fetcher.data.error?.password}
                                </p>
                            )}
                        </div>
                        {fetcher.data?.error?.message && (
                            <p className="text-red-500">
                                {fetcher.data?.error.message}
                            </p>
                        )}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {translate(`auth.${mode}.button`)}
                        </Button>
                    </div>
                </div>
            </fetcher.Form>
        </div>
    );
}
