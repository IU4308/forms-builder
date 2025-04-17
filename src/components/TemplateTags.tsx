import { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';

export default function TemplateTags() {
    const [selected, setSelected] = useState(['tag']);
    return (
        <div className="space-y-2">
            <input hidden readOnly name="tags" value={selected} />
            <div>Add Tags</div>

            <TagsInput
                onChange={setSelected}
                value={selected}
                placeHolder="Enter tags"
            />

            <em className="text-sm text-muted-foreground">
                Press enter to add a new tag
            </em>
        </div>
    );
}
