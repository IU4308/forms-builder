import GeneralSettings from './general/GeneralSettings';
import { useLoaderData } from 'react-router';
import { CreateTemplateData, TemplateData } from '@/lib/definitions';
import AccessSettings from './AccessSettings';
import { cn } from '@/lib/utils';

export default function TemplateSettings({ tabId }: { tabId: number }) {
    const { template, topics, tags, users } = useLoaderData() as
        | CreateTemplateData
        | TemplateData;
    return (
        <div
            className={cn(
                'max-w-[768px] mx-auto md:px-16 visible',
                tabId !== 1 && 'hidden'
            )}
        >
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
