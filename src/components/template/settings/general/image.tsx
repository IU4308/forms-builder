import { useState } from 'react';
import { Label } from '../../../ui/label';
import { Button } from '../../../ui/button';
import { IoTrash } from 'react-icons/io5';
import { Input } from '../../../ui/input';

export default function TemplateImage({
    imageUrl,
}: {
    imageUrl: string | null | undefined;
}) {
    const [isTrashed, setIsTrashed] = useState(false);
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="image">Image</Label>
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
                    <img src={imageUrl} alt="template image" />
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
