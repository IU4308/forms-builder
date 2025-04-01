import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import UserForms from '@/components/UserForms';
import UserTemplates from '@/components/UserTemplates';
import { useState } from 'react';

export default function Workspace() {
    const [tabId, setTabId] = useState(0);
    return (
        <main>
            <Header />
            <div className="mx-auto p-4 max-w-[1400px] ">
                <div className="mb-4 flex gap-2 justify-center">
                    <Button
                        variant={!tabId ? 'default' : 'ghost'}
                        onClick={() => setTabId(0)}
                    >
                        Templates
                    </Button>
                    <Button
                        variant={tabId ? 'default' : 'ghost'}
                        onClick={() => setTabId(1)}
                    >
                        Forms
                    </Button>
                </div>
                {!tabId && <UserTemplates />}
                {tabId === 1 && <UserForms />}
            </div>
        </main>
    );
}
