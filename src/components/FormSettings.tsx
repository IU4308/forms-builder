import { useLoaderData } from 'react-router';
import { Tag, TemplateType, Topic } from '@/lib/definitions';
import GeneralSettings from './GeneralSettings';
import AccessSettings from './AccessSettings';
import { useMergedLoadersData } from '@/lib/useMergedLoadersData';

type LoaderData = {
    template: TemplateType | undefined;
    topics: Topic[];
    tags: Tag[];
    users: { id: string; name: string; email: string }[];
    allowedIds: string[] | undefined;
};

export default function FormSettings() {
    const { template, topics, tags, users } =
        useMergedLoadersData<LoaderData>();
    console.log(template);
    return (
        <div className="max-w-[768px] mx-auto md:px-16">
            <GeneralSettings template={template} topics={topics} tags={tags} />
            <AccessSettings
                users={users}
                isPublicState={template?.isPublic}
                allowedIds={template?.allowedIds}
            />
        </div>
    );
}
