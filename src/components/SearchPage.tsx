import { Link, useLoaderData } from 'react-router';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function SearchPage() {
    const { templates, query } = useLoaderData();
    return (
        <div className="max-w-[768px] mx-auto flex flex-col gap-2">
            <div>Search Results for &quot;{query}&quot;</div>
            <div className="flex flex-col gap-2">
                {templates.map((template: any) => (
                    <Link
                        to={`/templates/${template.id}`}
                        key={template.id}
                        className="flex gap-4 bg-accent p-4"
                    >
                        <img
                            className="h-[150px] w-[150px] border object-cover"
                            src={
                                template.image_url
                                    ? template.image_url
                                    : '/default-fallback-image.png'
                            }
                            alt={`${template.title} image`}
                        />

                        <div className="flex flex-col gap-2">
                            <h1>{template.title}</h1>
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {template.description}
                            </Markdown>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
