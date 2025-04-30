import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';

export default function TemplateTitle({
    title,
}: {
    title: string | undefined;
}) {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="title">{t('Title')}</Label>
            <Input
                id="title"
                defaultValue={title ?? 'New Form'}
                name="title"
                className="!bg-background"
            />
        </div>
    );
}
