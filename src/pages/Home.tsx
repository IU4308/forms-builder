import Cloud from '@/components/Cloud';
import LatestsTemplates from '@/components/LatestsTemplates';
import Table from '@/components/Table';
import { templates } from '@/lib/constants';
import { getTableBody, getTableHead } from '@/lib/utils';

const rowProps = [
    ['title', ''],
    ['author', ''],
    ['submissions', 'text-right'],
];

const head = getTableHead(rowProps);
console.log(head);
console.log(getTableBody(rowProps, templates));

export default function Home() {
    return (
        <div>
            <LatestsTemplates />
            <Table
                url="/templates/1"
                head={getTableHead(rowProps)}
                body={getTableBody(rowProps, templates)}
            />
            <Cloud />
        </div>
    );
}
