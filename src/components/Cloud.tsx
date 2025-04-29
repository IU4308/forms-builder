// @ts-nocheck
import { TagCloud } from 'react-tagcloud';
import { Button } from './ui/button';
import { Tag } from '@/lib/definitions';
import { useLoaderData } from 'react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type LoaderData = {
    tags: Tag[];
    tagToTemplates: Map<number, string[]>;
};

export default function Cloud({
    handleSelect,
}: {
    handleSelect: (templatesIds: string[]) => void;
}) {
    const { t } = useTranslation();
    const { tags, tagToTemplates } = useLoaderData<LoaderData>();
    const [activeId, setActiveId] = useState<number | null>(null);
    const customRenderer = (tag: Tag) => (
        <Button
            key={tag.name}
            variant={activeId === tag.id ? 'default' : 'ghost'}
        >
            {tag.name}
        </Button>
    );

    return (
        <div className="py-4">
            <h1 className="mb-2">{t('Tag Search')}</h1>
            <TagCloud
                minSize={12}
                maxSize={35}
                tags={tags}
                disableRandomColor={true}
                renderer={customRenderer}
                onClick={(tag) => {
                    handleSelect(tagToTemplates.get(tag.id)!);
                    setActiveId(tag.id);
                }}
            />
        </div>
    );
}
