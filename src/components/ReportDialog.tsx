import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from './ui/button';
import { useFetcher, useLoaderData, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ReportDialog() {
    const { t } = useTranslation();
    const { currentUser, template } = useLoaderData() || {};
    const [priority, setPriority] = useState('low');
    const [isOpen, setIsOpen] = useState(false);

    const fetcher = useFetcher();
    const isIdle = fetcher.state === 'idle';

    const location = useLocation();

    useEffect(() => {
        if (isIdle && fetcher.data) {
            setIsOpen(false);
        }
    }, [fetcher.state, fetcher.data]);
    return (
        <fetcher.Form
            id="report-form"
            action="."
            method="post"
            className="flex justify-center bg-accent mt-10"
        >
            <input
                hidden
                readOnly
                name="reported_by"
                value={currentUser?.name ?? 'Guest'}
            />
            <input
                hidden
                readOnly
                name="template"
                value={template?.title ?? ''}
            />
            <input hidden readOnly name="link" value={location.pathname} />
            <input hidden readOnly name="priority" value={priority} />
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger className="py-2 px-4 hover:bg-secondary">
                    {t('Create a support ticket')}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {t('Create a support ticket')}
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        {t('Please, specify a priority of an issue.')}
                    </DialogDescription>
                    <div className="flex flex-col gap-4">
                        <Select onValueChange={(value) => setPriority(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue
                                    placeholder={t('Select Priority')}
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={'high'}>
                                    {t('High')}
                                </SelectItem>
                                <SelectItem value={'average'}>
                                    {t('Average')}
                                </SelectItem>
                                <SelectItem value={'low'}>
                                    {t('Low')}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Button
                            disabled={!isIdle}
                            type="submit"
                            form="report-form"
                        >
                            {t('Submit')}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </fetcher.Form>
    );
}
