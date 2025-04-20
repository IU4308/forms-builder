import { popularTemplatesAttributes } from '@/lib/constants';
import { popularTemplateType } from '@/lib/definitions';
import { useLoaderData } from 'react-router';
import Table from './Table';

type LoaderData = {
    popularTemplates: popularTemplateType[];
};

export default function PopularTemplates() {
    const { popularTemplates } = useLoaderData<LoaderData>();
    return (
        <Table
            slot={<h1 className="mb-2">Popular Templates</h1>}
            data={popularTemplates}
            attributes={popularTemplatesAttributes}
            url="templates"
        />
    );
}
