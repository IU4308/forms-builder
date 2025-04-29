import React from 'react';
import { Button } from '../ui/button';
import { useParams } from 'react-router';
import { templateTabButtons } from '@/lib/constants';
import TabPanel from '../TabPanel';
import { translateData } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export default function TemplateHeader({
    tabId,
    setTabId,
}: {
    tabId: number;
    setTabId: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { t: translator } = useTranslation();
    const { templateId } = useParams();
    return (
        <div className="sticky z-30 top-[53px] bg-background py-2 flex flex-col gap-4 items-center">
            <Button type="submit" variant={'outline'}>
                <span>
                    {translator(
                        templateId === undefined
                            ? 'buttons.publish'
                            : 'buttons.save'
                    )}
                </span>
            </Button>
            <TabPanel
                buttons={translateData(
                    templateId
                        ? templateTabButtons
                        : templateTabButtons.slice(0, 2),
                    ['label'],
                    translator
                )}
                tabId={tabId}
                setTabId={setTabId}
            />
        </div>
    );
}
