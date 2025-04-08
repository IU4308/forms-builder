import CustomForm from '@/components/CustomForm';
import FormSettings from '@/components/FormSettings';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Template() {
    const [tabId, setTabId] = useState(0);
    return (
        <div className="max-w-[768px] mx-auto">
            <div className="mb-4 flex gap-2 justify-center">
                <Button
                    variant={!tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(0)}
                >
                    Questions
                </Button>
                <Button
                    variant={tabId ? 'default' : 'ghost'}
                    onClick={() => setTabId(1)}
                >
                    Settings
                </Button>
            </div>
            <div className={cn('visible', tabId !== 0 && 'hidden')}>
                <CustomForm />
            </div>
            <div className={cn('visible', tabId !== 1 && 'hidden')}>
                <FormSettings />
            </div>
        </div>
    );
}
