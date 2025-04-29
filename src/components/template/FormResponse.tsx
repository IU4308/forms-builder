import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export default function FormResponse({
    templateId,
    formId,
}: {
    templateId: string;
    formId: string;
}) {
    const { t } = useTranslation();
    return (
        <div className="max-w-[768px] mx-auto bg-accent flex flex-col gap-4 p-8">
            <h1>{t('response.message')}</h1>
            <Link
                to={`/templates/${templateId}/forms`}
                reloadDocument
                className="underline underline-offset-2"
            >
                {t('response.new')}
            </Link>
            <Link
                to={`/templates/${templateId}/forms/${formId}`}
                reloadDocument
                className="underline underline-offset-2"
            >
                {t('response.edit')}
            </Link>
        </div>
    );
}
