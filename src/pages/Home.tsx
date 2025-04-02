import Cloud from '@/components/Cloud';
import LatestsTemplates from '@/components/LatestsTemplates';
import Table from '@/components/Table';
import { templates } from '@/lib/constants';
import { getTableBody, getTableHead } from '@/lib/utils';

const attributes = [
    ['title', ''],
    ['author', ''],
    ['submissions', 'text-right'],
];

export default function Home() {
    return (
        <div>
            <LatestsTemplates />
            <Table
                slot={<h1 className="mb-2">Popular Templates</h1>}
                head={getTableHead(attributes)}
                body={getTableBody(attributes, templates)}
                url="/templates/1"
            />
            <Cloud />
        </div>
    );
}
