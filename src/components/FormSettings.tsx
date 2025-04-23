import GeneralSettings from './GeneralSettings';
import AccessSettings from './AccessSettings';
import { useLoaderData } from 'react-router';
import { CreateTemplateData, TemplateData } from '@/lib/definitions';

export default function FormSettings() {
    const { template, topics, tags, users } = useLoaderData() as
        | CreateTemplateData
        | TemplateData;
    return (
        <div className="max-w-[768px] mx-auto md:px-16">
            <GeneralSettings
                title={template?.title}
                description={template?.description}
                imageUrl={template?.imageUrl}
                topicId={template?.topicId}
                topics={topics}
                tags={tags}
            />
            <AccessSettings
                users={users}
                isPublicState={template?.isPublic}
                allowedIds={template?.allowedIds}
            />
        </div>
    );
}
