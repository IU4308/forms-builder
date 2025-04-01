import { templates } from '@/lib/constants';

type TemplateProps = {
    title: string;
    author: string;
    description: string;
    image?: string;
};
const Template = ({ title, author, description, image }: TemplateProps) => {
    return (
        <div className="bg-secondary border hover:opacity-75 cursor-pointer flex flex-col justify-between gap-2 p-2">
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
        </div>
    );
};

export default function LatestsTemplates() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 py-2">
            {templates.map((template) => (
                <Template key={template.title} {...template} />
            ))}
        </div>
    );
}
