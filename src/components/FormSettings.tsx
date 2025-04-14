import { useLoaderData } from 'react-router';
import { TemplateType, Topic } from '@/lib/definitions';
import GeneralSettings from './GeneralSettings';
import AccessSettings from './AccessSettings';

type LoaderData = {
    template: TemplateType;
    topics: Topic[];
    users: { id: string; name: string; email: string }[];
};

export default function FormSettings() {
    const { template, topics, users } = useLoaderData<LoaderData>();
    return (
        <div className="max-w-[768px] mx-auto flex flex-col gap-4  py-6 px-4 md:px-16">
            <GeneralSettings template={template} topics={topics} />
            <AccessSettings users={users} />
        </div>
    );
}
