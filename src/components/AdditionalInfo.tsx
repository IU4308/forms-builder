import { Label } from './ui/label';
import { Input } from './ui/input';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { useFetcher, useLoaderData, useParams } from 'react-router';

export default function AdditionalInfo() {
    const { userId } = useParams();
    const { currentUser } = useLoaderData();
    const { t } = useTranslation();

    const fetcher = useFetcher();
    return (
        <fetcher.Form action={`/workspace/${userId}/about`} method="post">
            <h1 className="text-center my-4">Tell us about yourself</h1>
            <div className="flex flex-col gap-4">
                <input hidden readOnly name="name" value={currentUser.name} />
                <input hidden readOnly name="email" value={currentUser.email} />
                <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">{t('Phone Number')}</Label>
                    <Input id="phone" name="phone" className="!bg-background" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="about">
                        {t('How did you hear about us')}
                    </Label>
                    <Input
                        id="about"
                        name="leadSource"
                        className="!bg-background"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="consent">
                        {t('I want to receive newsletters on my email')}
                    </Label>
                    <Checkbox id="consent" name="consent" />
                </div>
                <Button disabled={fetcher.state !== 'idle'}>Save</Button>
            </div>
        </fetcher.Form>
    );
}
