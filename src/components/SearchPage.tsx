import { useLoaderData } from 'react-router';
import SearchResult from './SearchResult';

export default function SearchPage() {
    const { templates, query } = useLoaderData();
    return (
        <div className="max-w-[768px] mx-auto bg-accent flex flex-col gap-2">
            <div className="bg-background pb-4">
                Search Results for &quot;{query}&quot;
            </div>
            <div className="flex flex-col gap-2">
                {templates.map((template: any) => (
                    <SearchResult
                        key={template.id}
                        {...template}
                        imageUrl={template.image_url}
                    />
                ))}
            </div>
        </div>
    );
}
