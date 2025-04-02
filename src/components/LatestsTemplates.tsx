import { templates } from '@/lib/constants';
import { Link } from 'react-router';

type TemplateProps = {
    title: string;
    author: string;
    description: string;
    image: string | null;
};
const Template = ({ title, author, description, image }: TemplateProps) => {
    return (
        <Link
            to={'/templates/1'}
            className="bg-secondary border hover:opacity-75 cursor-pointer flex flex-col justify-between gap-2 px-4 py-2"
        >
            <div className="font-bold">{title}</div>
            <div className="">
                {image && (
                    <div className="float-left w-1/3 pr-2">
                        <img
                            className="object-contain"
                            src={image}
                            alt={title}
                        />
                    </div>
                )}
                <div className="break-words">
                    <span>{description.slice(0, 127)}</span>
                    {description.length > 128 && <span>...</span>}
                </div>
            </div>
            <div className="font-light">{author}</div>
        </Link>
    );
};

export default function LatestsTemplates() {
    return (
        <section className="mb-4">
            <h1>Latests Templates</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 py-2">
                {templates.map((template) => (
                    <Template key={template.title} {...template} />
                ))}
            </div>
        </section>
    );
}
