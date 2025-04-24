import GeneralSettings from './general/GeneralSettings';
import { useLoaderData } from 'react-router';
import { CreateTemplateData, TemplateData } from '@/lib/definitions';
import AccessSettings from './AccessSettings';

export default function TemplateSettings() {
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
                templateTagIds={template?.tagIds}
            />
            <AccessSettings
                users={users}
                isPublicState={template?.isPublic}
                allowedIds={template?.allowedIds}
            />
        </div>
    );
}
