import React from 'react';
import { Button } from '../ui/button';
import { useParams } from 'react-router';
import { templateTabButtons } from '@/lib/constants';
import TabPanel from '../TabPanel';

export default function TemplateHeader({
    tabId,
    setTabId,
}: {
    tabId: number;
    setTabId: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { templateId } = useParams();
    return (
        <div className="sticky z-30 top-[53px] bg-background py-2 flex flex-col gap-4 items-center">
            <Button type="submit" variant={'outline'}>
                <span>
                    {templateId === undefined
                        ? 'Publish Template'
                        : 'Save changes'}
                </span>
            </Button>
            <TabPanel
                buttons={
                    templateId
                        ? templateTabButtons
                        : templateTabButtons.slice(0, 2)
                }
                tabId={tabId}
                setTabId={setTabId}
            />
        </div>
    );
}
