import { Label } from '@/components/ui/label';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import rehypeSanitize from 'rehype-sanitize';

export default function TemplateDescription({
    description: templateDescription,
}: {
    description: string | undefined;
}) {
    const { t } = useTranslation();
    const [description, setDescription] = useState(
        templateDescription ?? t('template.default_description')
    );
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="description">{t('Description')}</Label>
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
