import { TagCloud } from 'react-tagcloud';
import { useLoaderData } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

type LoaderData = {
    tags: {
        id: number;
        name: string;
        count: string;
        templateIds: string[];
    }[];
};

export default function Cloud({
    handleSelect,
}: {
    handleSelect: (templatesIds: string[]) => void;
}) {
    const { t } = useTranslation();
    const { tags } = useLoaderData<LoaderData>();

    const [activeId, setActiveId] = useState<number | null>(null);

    const customRenderer = (tag: any, size: number) => {
        const isActive = tag.id === activeId;

        return (
            <span
                key={tag.id}
                className={`mx-2 my-1 inline-block cursor-pointer transition 
              ${isActive ? 'text-chart-2 font-bold underline' : 'text-foreground hover:text-chart-2 hover:opacity-80'}`}
                style={{ fontSize: `${size}px` }}
            >
                {tag.value}
            </span>
        );
    };

    return (
        <div className="py-4">
            <h1 className="mb-2">{t('home.tags')}</h1>
            <TagCloud
                minSize={16}
                maxSize={48}
                tags={tags.map((tag) => ({
                    value: tag.name,
                    count: Number(tag.count),
                    id: tag.id,
                    templateIds: tag.templateIds,
                }))}
                renderer={customRenderer}
                onClick={(tag) => {
                    // @ts-ignore
                    handleSelect(tag.templateIds);
                    // @ts-ignore
                    setActiveId(tag.id);
                }}
                className="cursor-pointer"
            />
        </div>
    );
}
