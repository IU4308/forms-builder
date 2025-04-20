import { useState } from 'react';
import Cloud from './Cloud';
import SearchResult from './SearchResult';
import { useLoaderData } from 'react-router';

type Template = {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
};

type LoaderData = {
    templates: Template[];
};

export default function TagSearch() {
    const { templates } = useLoaderData<LoaderData>();
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const handleSelect = (ids: string[]) => {
        setSelectedIds(ids);
    };

    return (
        <div className="pb-8">
            <Cloud handleSelect={handleSelect} />
            {templates.map(
                (template) =>
                    selectedIds.includes(template.id) && (
                        <SearchResult key={template.id} {...template} />
                    )
            )}
        </div>
    );
}
