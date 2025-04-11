export default function FormResponse({
    templateId,
    formId,
}: {
    templateId: string;
    formId: string;
}) {
    return (
        <div className="bg-accent flex flex-col gap-4 p-8">
            <h1>Answer is saved</h1>
            <a
                href={`/templates/${templateId}`}
                className="underline underline-offset-2"
            >
                Submit again
            </a>
            <a
                href={`/templates/${templateId}/forms/${formId}`}
                className="underline underline-offset-2"
            >
                Edit answers
            </a>
        </div>
    );
}
