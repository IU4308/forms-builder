import { useLoaderData } from 'react-router';
import { TemplateType, Topic } from '@/lib/definitions';
import GeneralSettings from './GeneralSettings';
import AccessSettings from './AccessSettings';

type LoaderData = {
    template: TemplateType | undefined;
    topics: Topic[];
    users: { id: string; name: string; email: string }[];
    allowedIds: string[] | undefined;
};

export default function FormSettings() {
    const { template, topics, users, allowedIds } = useLoaderData<LoaderData>();
    return (
        <div className="max-w-[768px] mx-auto md:px-16">
            <GeneralSettings template={template} topics={topics} />
            <AccessSettings
                users={users}
                isPublicState={template?.isPublic}
                allowedIds={allowedIds}
            />
        </div>
    );
}
