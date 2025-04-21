import { reactSelectStyles } from '@/lib/constants';
import { Tag } from '@/lib/definitions';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import CreatableSelect from 'react-select/creatable';
import { MultiValue, ActionMeta } from 'react-select';
import { useMergedLoadersData } from '@/lib/useMergedLoadersData';

type OptionType = {
    label: string;
    value: string;
};

const getOptions = (tags: Tag[]) =>
    tags.map((tag) => ({
        label: tag.name,
        value: tag.name,
    }));

const TemplateTags = ({ tags }: { tags: Tag[] }) => {
    const { template } = useMergedLoadersData();
    const tagOptions = getOptions(tags);
    const [selectedTags, setSelectedTags] = useState<OptionType[]>(
        getOptions(tags.filter((tag) => template?.tagIds?.includes(tag.id)))
    );

    const handleChange = (
        newValue: MultiValue<OptionType>,
        _actionMeta: ActionMeta<OptionType>
    ) => {
        setSelectedTags([...newValue]);
    };

    return (
        <div className="w-full space-y-2">
            <div>Select Tags</div>
            <input
                hidden
                readOnly
                name="tags"
                value={selectedTags.map((tag) => tag.value)}
            />
            <CreatableSelect
                isMulti
                onChange={handleChange}
                options={tagOptions}
                value={selectedTags}
                styles={reactSelectStyles}
                placeholder="Type and press enter..."
                className="react-select"
                classNamePrefix="react-select"
            />
        </div>
    );
};

export default TemplateTags;
