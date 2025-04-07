import Cloud from '@/components/Cloud';
import LatestsTemplates from '@/components/LatestsTemplates';
import Table from '@/components/Table';
import { homeTableAttributes, templates } from '@/lib/constants.tsx';

export default function Home() {
    return (
        <div>
            <LatestsTemplates />
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
