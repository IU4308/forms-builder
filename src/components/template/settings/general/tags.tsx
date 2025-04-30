import { reactSelectStyles } from '@/lib/constants';
import { Tag } from '@/lib/definitions';
import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { MultiValue, ActionMeta } from 'react-select';
import { useTranslation } from 'react-i18next';

type OptionType = {
    id: number;
    label: string;
    value: string;
    __isNew__?: boolean;
};

const getOptions = (tags: Tag[]) =>
    tags.map((tag) => ({
        id: tag.id,
        label: tag.name,
        value: tag.name,
    }));

const TemplateTags = ({
    tags,
    templateTagIds,
}: {
    tags: Tag[];
    templateTagIds: number[] | undefined;
}) => {
    const { t } = useTranslation();
    const tagOptions = getOptions(tags);
    const [selectedTags, setSelectedTags] = useState<OptionType[]>(
        getOptions(tags.filter((tag) => templateTagIds?.includes(tag.id)))
    );
    const newTags = selectedTags.filter((tag) => tag.__isNew__);

    const selectedIds = selectedTags
        .map((tag) => tag.id)
        .filter((tag) => tag !== undefined);

    const handleChange = (
        newValue: MultiValue<OptionType>,
        _actionMeta: ActionMeta<OptionType>
    ) => {
        setSelectedTags([...newValue]);
    };

    return (
        <div className="w-full space-y-2">
            <div>{t('Select Tags')}</div>
            <input
                hidden
                readOnly
                name="tagIds"
                value={selectedIds.join(',')}
            />
            {newTags?.length > 0 && (
                <input
                    hidden
                    readOnly
                    name="newTags"
                    value={newTags.map((tag) => tag.value)}
                />
            )}
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
