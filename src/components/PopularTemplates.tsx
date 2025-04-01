import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { templates } from '@/lib/constants';

type TemplateProps = {
    title: string;
    author: string;
};

const Template = ({ title, author }: TemplateProps) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{title}</TableCell>
            <TableCell>{author}</TableCell>
            <TableCell className="text-right">14</TableCell>
        </TableRow>
    );
};

export default function PopularTemplates() {
    return (
        <section>
            <h1>Popular Templates</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead className="text-right">
                            Number of Submissions
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
