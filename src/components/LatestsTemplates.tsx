import { latestTemplateType } from '@/lib/definitions';
import { Link, useLoaderData } from 'react-router';
import { format } from 'date-fns';
import removeMarkdown from 'remove-markdown';
import { useTranslation } from 'react-i18next';

const Template = ({
    id,
    title,
    author,
    description,
    imageUrl,
    createdAt,
}: latestTemplateType) => {
    return (
        <Link
            to={`/templates/${id}`}
            className="bg-accent border hover:opacity-75 cursor-pointer flex flex-col justify-between gap-2 px-4 py-2"
        >
            {
                <img
                    className="object-cover h-[150px]"
                    src={imageUrl ? imageUrl : '/default-fallback-image.png'}
                    alt={title}
                />
            }
            <div className="font-bold">{title}</div>
            <div className="break-words">
                <span>{removeMarkdown(description.slice(0, 127))}</span>
                {description.length > 128 && <span>...</span>}
            </div>
            <div className="flex justify-between">
                <div className="font-light">{author}</div>
                <div>{format(new Date(createdAt), 'MMM dd, yyyy')}</div>
            </div>
        </Link>
    );
};

type LoaderData = {
    latestTemplates: latestTemplateType[];
};

export default function LatestsTemplates() {
    const { latestTemplates } = useLoaderData<LoaderData>();
    const { t } = useTranslation();
    return (
        <section className="mb-4">
            <h1>{t('Latest Templates')}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 py-2">
                {latestTemplates.map((template) => (
                    <Template key={template.id} {...template} />
                ))}
            </div>
        </section>
    );
}
