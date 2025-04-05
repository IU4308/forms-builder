import Cloud from '@/components/Cloud';
import LatestsTemplates from '@/components/LatestsTemplates';
import Table from '@/components/Table';
import { homeTableAttributes, templates } from '@/lib/constants';
import { getTableBody } from '@/lib/utils';

export default function Home() {
    return (
        <div>
            <LatestsTemplates />
            <Table
                slot={<h1 className="mb-2">Popular Templates</h1>}
                body={getTableBody(homeTableAttributes, templates)}
                url="/templates/1"
            />
            <Cloud />
        </div>
    );
}
