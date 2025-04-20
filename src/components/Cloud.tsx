import { TagCloud } from 'react-tagcloud';
import { Button } from './ui/button';
import { Tag } from '@/lib/definitions';
import { useLoaderData } from 'react-router';

type LoaderData = {
    tags: Tag[];
    tagToTemplates: Map<number, string[]>;
};

type TagType = {
    value: string;
    count: number;
};

const customRenderer = (tag: TagType) => (
    <Button key={tag.value} variant={'ghost'}>
        {tag.value}
    </Button>
);

export default function Cloud({
    handleSelect,
}: {
    handleSelect: (templatesIds: string[]) => void;
}) {
    const { tags, tagToTemplates } = useLoaderData<LoaderData>();
    return (
        <div className="py-4">
            <h1 className="mb-2">Search by tag</h1>
            <TagCloud
                minSize={12}
                maxSize={35}
                tags={tags.map((tag) => ({
                    value: tag.name,
                    count: tag.id,
                }))}
                disableRandomColor={true}
                renderer={customRenderer}
                onClick={(tag) => handleSelect(tagToTemplates.get(tag.count)!)}
            />
        </div>
    );
}
