import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { templates } from '@/lib/constants.tsx';
import { Link } from 'react-router';

type TemplateProps = {
    title: string;
    author: string;
};

type CellProps = {
    content: string;
    className?: string;
};

const Cell = ({ content, className }: CellProps) => {
    return (
        <TableCell className={className + ' p-0'}>
            <Link to={`/templates/1`} className=" block p-2">
                {content}
            </Link>
        </TableCell>
    );
};

const Template = ({ title, author }: TemplateProps) => {
    return (
        <TableRow>
            <Cell content={title} />
            <Cell content={author} />
            <Cell content={'14'} className="text-right" />
        </TableRow>
    );
};

export default function PopularTemplates() {
    return (
        <section className="mb-4">
            <h1>Popular Templates</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead className="text-right">Submission</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {templates.map((template) => (
                        <Template key={template.title} {...template} />
                    ))}
                </TableBody>
            </Table>
        </section>
    );
}
