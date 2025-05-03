import { TagCloud } from 'react-tagcloud';
import { useLoaderData } from 'react-router';
import { useTranslation } from 'react-i18next';

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
                onClick={(tag) => {
                    // @ts-ignore
                    handleSelect(tag.templateIds);
                }}
                className="cursor-pointer"
            />
        </div>
    );
}
