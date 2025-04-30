import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

export default function SideButtons() {
    return (
        <div className="flex gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
        </div>
    );
}
