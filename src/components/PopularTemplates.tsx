import { popularTemplatesAttributes } from '@/lib/constants';
import { popularTemplateType } from '@/lib/definitions';
import { useLoaderData } from 'react-router';
import AppTable from './app-table/AppTable';
import { useTranslation } from 'react-i18next';

type LoaderData = {
    popularTemplates: popularTemplateType[];
};

export default function PopularTemplates() {
    const { popularTemplates } = useLoaderData<LoaderData>();
    const { t } = useTranslation();
    return (
        <AppTable
            slot={<h1 className="mb-2">{t('Popular Templates')}</h1>}
            data={popularTemplates}
            attributes={popularTemplatesAttributes}
            url="templates"
        />
    );
}
