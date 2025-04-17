import { Label } from './ui/label';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';

export default function TemplateDescription({
    description: templateDescription,
}: {
    description: string | undefined;
}) {
    const [description, setDescription] = useState(
        templateDescription ?? 'No description'
    );
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <div className="container">
                <MDEditor
                    id="description"
                    value={description}
                    onChange={(value) => setDescription(value ?? '')}
                    previewOptions={{
                        rehypePlugins: [[rehypeSanitize]],
                    }}
                />
            </div>
            <input type="hidden" name="description" value={description} />
        </div>
    );
}
