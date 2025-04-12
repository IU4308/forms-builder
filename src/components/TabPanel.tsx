import { Button } from './ui/button';

export default function TabPanel({
    buttons,
    tabId,
    setTabId,
}: {
    buttons: { id: number; label: string }[];
    tabId: number;
    setTabId: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <div className="mb-4 flex gap-2 justify-center">
            {buttons.map((button) => (
                <Button
                    key={button.label}
                    type="button"
                    variant={tabId === button.id ? 'default' : 'ghost'}
                    onClick={() => setTabId(button.id)}
                >
                    {button.label}
                </Button>
            ))}
        </div>
    );
}
