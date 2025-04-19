import Cloud from '@/components/Cloud';
import LatestsTemplates from '@/components/LatestsTemplates';
import Table from '@/components/Table';
import { popularTemplatesAttributes } from '@/lib/constants.tsx';
import { latestTemplateType, popularTemplateType } from '@/lib/definitions';
import { useLoaderData } from 'react-router';

type LoaderData = {
    latestTemplates: latestTemplateType[];
    popularTemplates: popularTemplateType[];
};

export default function Home() {
    const { latestTemplates, popularTemplates } = useLoaderData<LoaderData>();
    return (
        <div>
            <LatestsTemplates templates={latestTemplates} />
            <Table
                slot={<h1 className="mb-2">Popular Templates</h1>}
                data={popularTemplates}
                attributes={popularTemplatesAttributes}
                url="templates"
            />
            <Cloud />
        </div>
    );
}
