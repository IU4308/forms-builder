import { popularTemplatesAttributes } from '@/lib/constants';
import { popularTemplateType } from '@/lib/definitions';
import { useLoaderData } from 'react-router';
import AppTable from './app-table/AppTable';

type LoaderData = {
    popularTemplates: popularTemplateType[];
};

export default function PopularTemplates() {
    const { popularTemplates } = useLoaderData<LoaderData>();
    return (
        <AppTable
            slot={<h1 className="mb-2">Popular Templates</h1>}
            data={popularTemplates}
            attributes={popularTemplatesAttributes}
            url="templates"
        />
    );
}
