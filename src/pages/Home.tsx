import Cloud from '@/components/Cloud';
import LatestsTemplates from '@/components/LatestsTemplates';
import Table from '@/components/Table';
import { homeTableAttributes, templates } from '@/lib/constants.tsx';
import { latestTemplateType } from '@/lib/definitions';
import { useLoaderData } from 'react-router';

type LoaderData = {
    latestTemplates: latestTemplateType[];
};

export default function Home() {
    const { latestTemplates } = useLoaderData<LoaderData>();
    return (
        <div>
            <LatestsTemplates templates={latestTemplates} />
            <Table
                slot={<h1 className="mb-2">Popular Templates</h1>}
                data={templates}
                attributes={homeTableAttributes}
                url="/templates/1"
            />
            <Cloud />
        </div>
    );
}
