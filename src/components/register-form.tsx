import { GalleryVerticalEnd } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useFetcher } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterData, registerSchema } from '@/lib/definitions';

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === 'submitting';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>({
        resolver: zodResolver(registerSchema),
    });
    const onSubmit = (data: RegisterData) => {
        // const formData = new FormData();
        // formData.append('name', data.name);
        // formData.append('email', data.email);
        // formData.append('password', data.password);

        fetcher.submit(data, { method: 'post', action: '/register' });
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <fetcher.Form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <Link
                            to={'/'}
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="flex size-8 items-center justify-center rounded-md">
                                <GalleryVerticalEnd className="size-6" />
                            </div>
                        </Link>
                        <h1 className="text-xl font-bold">Register</h1>
                        <div className="text-center text-sm">
                            Already have an account?{' '}
                            <Link
                                to={'/login'}
                                className="underline underline-offset-4"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                {...register('name')}
                                placeholder="John Doe"
                                required
                            />
                            {(errors.name || fetcher.data?.error?.name) && (
                                <p className="text-red-500">
                                    {errors?.name?.message ||
                                        fetcher.data.error?.name}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                placeholder="m@example.com"
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
                            <Label htmlFor="password">Password</Label>
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
                            {isSubmitting ? 'Loading...' : 'Register'}
                        </Button>
                    </div>
                </div>
            </fetcher.Form>
        </div>
    );
}
