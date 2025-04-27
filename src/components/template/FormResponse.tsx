import { Link } from 'react-router';

export default function FormResponse({
    templateId,
    formId,
}: {
    templateId: string;
    formId: string;
}) {
    return (
        <div className="max-w-[768px] mx-auto bg-accent flex flex-col gap-4 p-8">
            <h1>Answer is saved</h1>
            <Link
                to={`/templates/${templateId}/forms`}
                reloadDocument
                className="underline underline-offset-2"
            >
                Submit again
            </Link>
            <Link
                to={`/templates/${templateId}/forms/${formId}`}
                reloadDocument
                className="underline underline-offset-2"
            >
                Edit answers
            </Link>
        </div>
    );
}
