import { Link } from 'react-router';
import removeMarkdown from 'remove-markdown';

type SearchResultsProps = {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
};

export default function SearchResult({
    id,
    title,
    imageUrl,
    description,
}: SearchResultsProps) {
    return (
        <Link
            to={`/templates/${id}`}
            key={id}
            className="flex gap-4 p-4 hover:bg-secondary"
        >
            <img
                className="h-[150px] w-[150px] border object-cover shrink-0"
                src={imageUrl ? imageUrl : '/default-fallback-image.png'}
                alt={`${title} image`}
            />

            <div className="flex flex-col gap-2">
                <h1>{title}</h1>
                <div>{removeMarkdown(description)}</div>
            </div>
        </Link>
    );
}
