import { Button } from './ui/button';

export default function Toolbar() {
    return (
        <div className="flex gap-2 mb-2">
            <Button variant={'outline'}>Create</Button>
            <Button variant={'destructive'}>Delete</Button>
        </div>
    );
}
