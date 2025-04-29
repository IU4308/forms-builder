import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: 'en' | 'ru') => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <IoLanguage />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="my-4 mx-2">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ru')}>
                    Русский
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
