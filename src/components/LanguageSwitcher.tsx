import { useTranslation } from 'react-i18next';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: 'en' | 'ru') => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };
    return (
        <Select
            defaultValue={localStorage.getItem('language') || 'en'}
            onValueChange={(value: 'en' | 'ru') => changeLanguage(value)}
        >
            <SelectTrigger className="w-[100px] !bg-background">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="!bg-background">
                <SelectItem value={`en`}>English</SelectItem>
                <SelectItem value={`ru`}>Русский</SelectItem>
            </SelectContent>
        </Select>
    );
}
