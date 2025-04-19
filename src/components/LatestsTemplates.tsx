import { latestTemplateType } from '@/lib/definitions';
import { Link } from 'react-router';
import removeMarkdown from 'remove-markdown';

const Template = ({
    id,
    title,
    author,
    description,
    imageUrl,
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
            <div className="font-light">{author}</div>
        </Link>
    );
};

export default function LatestsTemplates({
    templates,
}: {
    templates: latestTemplateType[];
}) {
    return (
        <section className="mb-4">
            <h1>Latests Templates</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 py-2">
                {templates.map((template) => (
                    <Template key={template.id} {...template} />
                ))}
            </div>
        </section>
    );
}
