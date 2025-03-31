import { MdSunny } from 'react-icons/md';
import { Button } from './ui/button';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeSwitcher() {
    const { toggleTheme } = useTheme();
    return (
        <Button variant={'outline'} className="" onClick={toggleTheme}>
            <MdSunny className="text-2xl " />
        </Button>
    );
}
