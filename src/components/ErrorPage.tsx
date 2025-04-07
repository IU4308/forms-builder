import { useRouteError } from 'react-router';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="p-8 text-center bg-background">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p>
                {(error as Error)?.message || 'An unexpected error occurred.'}
            </p>
        </div>
    );
}
