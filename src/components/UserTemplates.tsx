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
import { Checkbox } from '@/components/ui/checkbox';
import { WorkspaceToolbar } from './toolbars';

type TemplateProps = {
    title: string;
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

const Template = ({ title }: TemplateProps) => {
    return (
        <TableRow>
            <TableCell>
                <Checkbox />
            </TableCell>
            <Cell content={title} />
            <Cell content={new Date().toUTCString()} />
            <Cell content={new Date().toUTCString()} />
            <Cell content="14" className="text-right" />
        </TableRow>
    );
};

export default function UserTemplates() {
    return (
        <section className="">
            <WorkspaceToolbar />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <Checkbox />
                        </TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Updated</TableHead>
                        <TableHead className="text-right">
                            Submissions
                        </TableHead>
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
