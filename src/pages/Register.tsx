import { RegisterForm } from '@/components/register-form';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Register() {
    return (
        <div className=" flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="relative w-full max-w-sm">
                <ThemeSwitcher />
                <RegisterForm />
            </div>
        </div>
    );
}
