import { popularTemplatesAttributes } from '@/lib/constants';
import { popularTemplateType } from '@/lib/definitions';
import { useLoaderData } from 'react-router';
import AppTable from './app-table/AppTable';
import { useTranslation } from 'react-i18next';
import { translateData } from '@/lib/utils';

type LoaderData = {
    popularTemplates: popularTemplateType[];
};

export default function PopularTemplates() {
    const { t: translator } = useTranslation();
    const { popularTemplates } = useLoaderData<LoaderData>();
    const { t } = useTranslation();
    return (
        <AppTable
            slot={<h1 className="mb-2">{t('home.popular')}</h1>}
            data={popularTemplates}
            attributes={translateData(
                popularTemplatesAttributes,
                ['label'],
                translator
            )}
            routes="templates"
        />
    );
}
