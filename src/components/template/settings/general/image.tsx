import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoTrash } from 'react-icons/io5';

export default function TemplateImage({
    imageUrl,
}: {
    imageUrl: string | null | undefined;
}) {
    const { t } = useTranslation();
    const [isTrashed, setIsTrashed] = useState(false);
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="image">{t('Image')}</Label>
            {isTrashed && <input hidden readOnly name="imageUrl" value={''} />}
            {(!imageUrl || isTrashed) && (
                <Input
                    type="file"
                    id="image"
                    className="!bg-background"
                    name="image"
                    accept="image/*"
                />
            )}
            {imageUrl && !isTrashed && (
                <div className="relative">
                    <img
                        src={imageUrl}
                        alt="template image"
                        className="max-h-[400px] object-cover w-full"
                    />
                    <Button
                        type="button"
                        className="absolute top-2 right-2"
                        variant={'destructive'}
                        onClick={() => setIsTrashed(true)}
                    >
                        <IoTrash />
                    </Button>
                </div>
            )}
        </div>
    );
}
