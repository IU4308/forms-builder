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
            <Link to={`/forms/1`} className=" block p-2">
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
            <Cell content={new Date().toUTCString()} />
        </TableRow>
    );
};

export default function UserForms() {
    return (
        <section className="">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Filled out</TableHead>
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
